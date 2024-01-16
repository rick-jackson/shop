import { getAllProducts } from "@gateways/getProducts";
import { useEffect, useState } from "react";
import type { Product } from "src/types/entities/product";

const useAutocomplete = (str: string) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Product[]>([]);
  const loading = open && options.length === 0;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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

  return {
    loading,
    options: !str
      ? []
      : options.filter((option) =>
          option.title.toLowerCase().includes(str.toLowerCase())
        ),
    handleClose,
    handleOpen,
    open,
  };
};

export default useAutocomplete;
