import axios from "axios";
import type { Product } from "src/types/entities/product";

export const getProduct = async (id: number): Promise<Product> => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

export const getCategoryProducts = async (
  category: string
): Promise<Product[]> => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return data;
};

export const getAllProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

export const getProducts = async (products: Product[]): Promise<Product[]> => {
  return await Promise.all(dataPromises(products));
};

const dataPromises = (products: Product[]) => {
  return products.map(async ({ id }) => await getProduct(id));
};
