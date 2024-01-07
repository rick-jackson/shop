import { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import type { Product } from "src/types/entities/product";
import { calculateTotal } from "@common/utils/calculateTotalPrice";
import { filterProducts } from "@common/utils/filterProducts";
import { useAppSelector } from "@common/hooks/redux";
import { getProducts } from "@gateways/getProducts";
import ConfirmedOrder from "./ConfirmedOrder";
import BasketCard from "./Card";

import * as Styled from "./Cart.styled";

const Basket: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isSubmit, setSubmit] = useState(false);

  const { productsCart } = useAppSelector((state) => state.productsCart);

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

  const totalSum = calculateTotal(products, productsCart).toLocaleString();

  if (isLoading) return <CircularProgress sx={{ margin: "auto" }} />;

  if (isSubmit)
    return (
      <Styled.EmptyShoppingCart>
        <TaskAltIcon color="success" sx={{ fontSize: "15em" }} />
        <Typography variant="h3">The order has been sent</Typography>
      </Styled.EmptyShoppingCart>
    );

  if (!productsCart.length)
    return (
      <Styled.EmptyShoppingCart>
        <ShoppingCartOutlinedIcon color="primary" sx={{ fontSize: "15em" }} />
        <Typography variant="h3">Cart is empty</Typography>
      </Styled.EmptyShoppingCart>
    );

  return (
    <Styled.Container>
      <Styled.List>
        {productsCart.map(({ count, id }) => (
          <BasketCard key={id} products={products} count={count} id={id} />
        ))}
      </Styled.List>
      <Styled.Total>
        TOTAL: $ {totalSum}
        <ConfirmedOrder
          products={filterProducts(products, productsCart)}
          onSubmit={setSubmit}
        />
      </Styled.Total>
    </Styled.Container>
  );
};

export default Basket;
