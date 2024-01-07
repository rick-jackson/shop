import type { Product } from "src/types/entities/product";

export const calculateTotal = (
  products: Product[],
  cart: { id: number; count: number }[]
) => {
  let total = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (product) {
      total += product.price * item.count;
    }
  });

  return total;
};
