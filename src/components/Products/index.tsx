import { Button, Rating, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useAppDispatch, useAppSelector } from "@common/hooks/redux";
import { addShopping } from "@store/actions/shopping";

import * as Styled from "./Product.styled";

type ProductProps = {
  product: any;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  const { shoppings } = useAppSelector((state) => state.shoppings);
  const dispatch = useAppDispatch();
  const isPurchasedProduct = !!shoppings.find((el) => el.id === product.id);

  return (
    <Styled.Container>
      <Styled.Image
        src={product.image}
        alt={product.title}
        width={0}
        height={0}
        sizes="100vw"
        priority
      />
      <Styled.Info>
        <Typography variant="h1" fontSize="28px">
          {product.title}
        </Typography>
        <span>{product.category}</span>
        <Typography variant="body1"> {product.description}</Typography>
        <Styled.Price>
          <Styled.Rating>
            <Rating precision={0.5} value={product.rating.rate} readOnly />
            <span>({product.rating.count})</span>
          </Styled.Rating>
          <span style={{ fontWeight: 700, fontSize: "22px" }}>
            $ {product.price}
          </span>
        </Styled.Price>
        <Button
          variant="text"
          onClick={() => dispatch(addShopping(product.id))}
          disabled={isPurchasedProduct}
          sx={{ gap: "8px", alignItems: "center", marginLeft: "auto" }}
        >
          {isPurchasedProduct ? (
            <>
              In basket <CheckCircleOutlineIcon />
            </>
          ) : (
            <>
              Add to basket
              <ShoppingCartOutlinedIcon />
            </>
          )}
        </Button>
      </Styled.Info>
    </Styled.Container>
  );
};

export default Product;
