import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../api/categories";

const getAllCategories = createAsyncThunk("categories/all", async () => {
  const response = await getAll();

  return response.data;
});

export { getAllCategories };
