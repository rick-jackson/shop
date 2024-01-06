import axios from "axios";

const dataPromises = (result) => {
  return result.map(async ({ id }) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);

    return data;
  });
};

export const getProducts = async (pokemons) => {
  return await Promise.all(dataPromises(pokemons));
};
