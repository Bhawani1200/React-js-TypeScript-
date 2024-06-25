import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../api/products";
import { productQuery } from "../../types/product";
const getAllProducts = createAsyncThunk("products/all", async (query:productQuery) => {
  const response = await getAll(query);
  return response?.data;
});
export { getAllProducts };
