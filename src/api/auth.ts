import axios, { AxiosResponse } from "axios";
import config from "../config/config";

const login = async (data: {
  email: string;
  password: string;
}): Promise<AxiosResponse> => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);
  if(response.data.token){

      localStorage.setItem("authToken", response.data.token);
  }
  return response;
};
const register = async (data: {
  name:string;
  email: string;
  password: string;
  confirmPassword:string;
}): Promise<AxiosResponse> => {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, data);
  if(response.data.token){

      localStorage.setItem("authToken", response.data.token);
  }
  return response;
};
const isAuthenticated=()=>{
  const token=localStorage.getItem('authToken')
  console.log(token)
  return !!token;
}
const logout=()=>{
  localStorage.removeItem("authToken")
}
export { login ,isAuthenticated,logout,register};
