import { useRouter } from "next/router";
import { Button, CircularProgress } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { calculateTotal } from "@common/utils/calculateTotalPrice";
import { useAppSelector } from "@common/hooks/redux";
import useShopping from "@common/hooks/useShopping";
import InfoBlock from "../InfoBlock";
import ShoppingCart from "./Card";

import * as Styled from "./Cart.styled";

const Cart: React.FC = () => {
  const router = useRouter();

  const { productsCart } = useAppSelector((state) => state.productsCart);
  const { products, isLoading } = useShopping();

  const totalSum = calculateTotal(products, productsCart).toLocaleString();

  if (isLoading) return <CircularProgress sx={{ margin: "auto" }} />;

  if (!productsCart.length)
    return (
      <InfoBlock
        icon={<ShoppingCartOutlinedIcon color="primary" />}
        text="Cart is empty"
      />
    );

  return (
    <Styled.Container>
      <Styled.List>
        {productsCart.map(({ count, id }) => (
          <ShoppingCart key={id} products={products} count={count} id={id} />
        ))}
      </Styled.List>
      <Styled.Total>
        TOTAL: $ {totalSum}
        <Button
          onClick={() => router.push("/placing-order")}
          color="success"
          variant="outlined"
        >
          To order
        </Button>
      </Styled.Total>
    </Styled.Container>
  );
};

export default Cart;
