import api from "./api";

const getAll = async () => {
  const response = await api.get("/products/categories");

  return response;
};

export { getAll };
