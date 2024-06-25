import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../api/auth";
import { LoginInput, RegisterInput } from "../../types/auth";
import { AxiosError } from "axios";

const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginInput, { rejectWithValue }) => {
    try {
      const response = await login(data);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error) {
      const errorWithType = error as AxiosError;
      return rejectWithValue(errorWithType.response?.data);
    }
  }
);
const registerUserData = createAsyncThunk(
  "auth/register",
  async (data: RegisterInput, { rejectWithValue }) => {
    try {
      const response = await register(data);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error) {
      const errorWithType = error as AxiosError;
      return rejectWithValue(errorWithType.response?.data);
    }
  }
);
export { loginUser, registerUserData };
