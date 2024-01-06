import { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { calculateTotal } from "@common/utils/calculateTotalPrice";
import { useAppSelector } from "@common/hooks/redux";
import { getProducts } from "@gateways/getProducts";
import ConfirmedOrder from "./ConfirmedOrder";
import BasketCard from "./Card";

import * as Styled from "./Basket.styled";

const Basket: React.FC = () => {
  const [products, setProducts] = useState([]);
  const { shoppings } = useAppSelector((state) => state.shoppings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localeShoppings = JSON.parse(localStorage.getItem("shoppings"));

    if (!!localeShoppings?.length) {
      setLoading(true);
      (async () => {
        const data = await getProducts(localeShoppings);
        setProducts(data);
        setLoading(false);
      })();
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalSum = calculateTotal(products, shoppings).toLocaleString();

  function filterProducts(products, purchases) {
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
  }

  if (loading) return <CircularProgress sx={{ margin: "auto" }} />;

  if (!shoppings.length)
    return (
      <Styled.EmptyShoppingCart>
        <ShoppingCartOutlinedIcon color="primary" sx={{ fontSize: "15em" }} />
        <Typography variant="h3">Shopping cart is empty</Typography>
      </Styled.EmptyShoppingCart>
    );

  return (
    <Styled.Container>
      <Styled.List>
        {shoppings.map(({ count, id }) => (
          <BasketCard key={id} products={products} count={count} id={id} />
        ))}
      </Styled.List>
      <Styled.Total>
        TOTAL: $ {totalSum}
        <ConfirmedOrder products={filterProducts(products, shoppings)} />
      </Styled.Total>
    </Styled.Container>
  );
};

export default Basket;
