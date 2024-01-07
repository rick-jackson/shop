import type { Product } from "src/types/entities/product";

export const filterProducts = (
  products: Product[],
  purchases: { id: number; count: number }[]
) => {
  return products
    .filter((product) =>
      purchases.some((purchase) => purchase.id === product.id)
    )
    .map((product) => {
      const foundPurchase = purchases.find(
        (purchase) => purchase.id === product.id
      );
      return { ...product, count: foundPurchase.count };
    });
};
