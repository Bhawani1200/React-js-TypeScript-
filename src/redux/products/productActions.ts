import { createAsyncThunk } from "@reduxjs/toolkit";
import { create, getAll, getById, remove, update } from "../../api/products";
import { Product, ProductQuery } from "../../types/product";
import { AxiosError } from "axios";

const getAllProducts = createAsyncThunk(
  "products/all",
  async (query: ProductQuery) => {
    const response = await getAll(query);

    return response.data;
  }
);

const createProduct = createAsyncThunk(
  "products/add",
  async (data: Product, { rejectWithValue }) => {
    try {
      const response = await create(data);

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await remove(id);

      dispatch(getAllProducts({}));

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const getProductById = createAsyncThunk(
  "products/getById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await getById(id);

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const updateProduct = createAsyncThunk(
  "products/update",
  async (product: Product, { rejectWithValue, dispatch }) => {
    try {
      const response = await update(product.id, product);

      dispatch(getProductById(product.id));

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.response?.data);
    }
  }
);

export {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductById,
  updateProduct,
};
