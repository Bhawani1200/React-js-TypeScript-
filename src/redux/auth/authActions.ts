import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../api/auth";
import { LoginInput, RegisterInput } from "../../types/auth";
import { AxiosError } from "axios";

// action name: "auth/login"
const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginInput, { rejectWithValue }) => {
    try {
      const response = await login(data);

      localStorage.setItem("authToken", response.data.token);

      return response.data;
    } catch (error) {
      const errorWithType = error as AxiosError;

      return rejectWithValue(errorWithType.response?.data);
    }
  }
);

const registerUser = createAsyncThunk(
  "auth/register",
  async (data: RegisterInput, { rejectWithValue }) => {
    try {
      const response = await register(data);

      localStorage.setItem("authToken", response.data.token);

      return response.data;
    } catch (error) {
      const errorWithType = error as AxiosError;

      return rejectWithValue(errorWithType.response?.data);
    }
  }
);

export { loginUser, registerUser };
