import { getAllProducts } from "@gateways/getProducts";
import { useEffect, useState } from "react";
import type { Product } from "src/types/entities/product";

const useAutocomplete = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Product[]>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const products = await getAllProducts();

      if (active) {
        setOptions(products);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return { loading, options, setOpen, open };
};

export default useAutocomplete;
