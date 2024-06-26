import { AxiosResponse } from "axios";
import { LoginInput, RegisterInput } from "../types/auth";
import api from "./api";

const login = async (data: LoginInput): Promise<AxiosResponse> => {
  const response = await api.post(`/auth/login`, data);

  return response;
};

const register = async (data: RegisterInput): Promise<AxiosResponse> => {
  const response = await api.post(`/auth/register`, data);

  return response;
};

export { login, register };
