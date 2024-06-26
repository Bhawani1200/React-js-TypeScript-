import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductQuery } from "../../types/product";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "./productActions";

type ProductState = {
  loading: boolean;
  error: string | null;
  products: Product[];
  query: ProductQuery;
  success: "updated" | "deleted" | "added" | null;
  sortOrder: 1 | -1;
};

const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
  query: {
    limit: 10,
    sort: { createdAt: -1 },
    filters: {},
    offset: 0,
  },
  success: null,
  sortOrder: 1,
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setSort: (state, action) => {
      state.query = {
        ...state.query,
        sort: {
          [action.payload]: state.sortOrder,
        },
      };

      state.sortOrder = state.sortOrder == 1 ? -1 : 1;
    },
    resetSuccess: (state) => {
      state.success = null;
    },
    setLimit: (state, action) => {
      state.query = { ...state.query, limit: action.payload };
    },
    setFilters: (state, action) => {
      state.query = { ...state.query, filters: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.loading = false;
        state.success = "added";
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.loading = false;
        state.success = "deleted";
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [action.payload];
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.loading = false;
        state.success = "updated";
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { setSort, resetSuccess, setLimit, setFilters } =
  productSlice.actions;

export default productSlice.reducer;
