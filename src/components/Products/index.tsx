import { Rating, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import type { Product as ProductType } from "src/types/entities/product";
import { useAppDispatch, useAppSelector } from "@common/hooks/redux";
import { addProductsCart } from "@store/actions/productsCart";

import * as Styled from "./Product.styled";

type ProductProps = {
  product: ProductType;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  const { productsCart } = useAppSelector((state) => state.productsCart);
  const dispatch = useAppDispatch();

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
        <Styled.Title variant="h1">{product.title}</Styled.Title>
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
        <Styled.Button
          variant="text"
          onClick={() => dispatch(addProductsCart(product.id))}
          {...(!!productsCart.find((el) => el.id === product.id) && {
            color: "success",
          })}
        >
          add to cart
          <ShoppingCartOutlinedIcon />
        </Styled.Button>
      </Styled.Info>
    </Styled.Container>
  );
};

export default Product;
