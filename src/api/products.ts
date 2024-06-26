import { Product, ProductQuery } from "../types/product";
import api from "./api";

const getAll = async ({
  limit = 10,
  sort = { createdAt: -1 },
  filters = {},
  offset = 0,
}: ProductQuery) => {
  const queryParams = `limit=${limit}&offset=${offset}&sort=${JSON.stringify(
    sort
  )}&filters=${JSON.stringify(filters)}`;

  const response = api.get(`/products?${queryParams}`);

  return response;
};

const create = async (data: Product) => {
  const createdProduct = await api.post(`/products`, data);

  return createdProduct;
};

const remove = async (id: string) => {
  const deletedProduct = await api.delete(`/products/${id}`);

  return deletedProduct;
};

const getById = async (id: string) => {
  const product = await api.get(`/products/${id}`);

  return product;
};

const update = async (id: string, data: Product) => {
  const product = await api.put(`/products/${id}`, data);

  return product;
};

export { getAll, create, remove, getById, update };
