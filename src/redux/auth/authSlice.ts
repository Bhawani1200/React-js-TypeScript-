import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUserData } from "./authActions";
import { User } from "../../types/auth";
export type authState = {
  loading: boolean;
  error: string | null;
  user: User | null;
  isAuthenticated: boolean;
};
const initialState: authState = {
  loading: false,
  error: null,
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUserData.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAuthenticated = true;
      })
      .addCase(registerUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
