import axios from "axios";

export const getCategories = async (): Promise<string[]> => {
  const { data } = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  return data;
};
