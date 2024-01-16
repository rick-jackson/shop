import { useEffect, useState } from "react";

import type { Product } from "src/types/entities/product";
import { getProducts } from "@gateways/getProducts";

const useShopping = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const localeProductsCart = JSON.parse(localStorage.getItem("productsCart"));

    if (!!localeProductsCart?.length) {
      try {
        (async () => {
          const data = await getProducts(localeProductsCart);
          setProducts(data);
          setLoading(false);
        })();
      } catch (e) {
        alert(e.message);
      }
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { products, isLoading };
};

export default useShopping;
