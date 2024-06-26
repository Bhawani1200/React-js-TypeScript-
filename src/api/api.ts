import axios from "axios";
import config from "../config/config";

const authToken = localStorage.getItem("authToken");

const api = axios.create({
  baseURL: `${config.apiUrl}/api`,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

export default api;
