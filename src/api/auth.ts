import axios, { AxiosResponse } from "axios";
import config from "../config/config";
import { LoginInput, RegisterInput } from "../types/auth";
const login = async (data:LoginInput): Promise<AxiosResponse> => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);
  if(response.data.token){
      localStorage.setItem("authToken", response.data.token);
  }
  return response;
};
const register = async (data: RegisterInput
  ): Promise<AxiosResponse> => {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, data);
  return response;
};
export { login ,register};
