export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
};

export type ProductQuery = {
  filters?: {
    [key: string]: string;
  };
  sort?: {
    [key: string]: 1 | -1;
  };
  limit?: number;
  offset?: number;
};
