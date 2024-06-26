import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "./categoryActions";

type InitState = {
  categories: string[];
  loading: boolean;
  error: string | null;
};

const initState: InitState = {
  categories: [],
  loading: false,
  error: null,
};

export const categorySlice = createSlice({
  initialState: initState,
  name: "category",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categorySlice.reducer;
