import { Rating, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import type { Product as ProductType } from "src/types/entities/product";
import { capitalizeFirstLetter } from "@common/utils/capitalizeFirstLetter";
import { useAppDispatch, useAppSelector } from "@common/hooks/redux";
import { addProductsCart } from "@store/actions/productsCart";
import Link from "@components/Link";

import * as Styled from "./Product.styled";

type ProductProps = {
  product: ProductType;
};

const Product: React.FC<ProductProps> = ({
  product: { image, title, id, category, price, rating, description },
}) => {
  const { productsCart } = useAppSelector((state) => state.productsCart);
  const dispatch = useAppDispatch();

  return (
    <Styled.Container>
      <Styled.Image
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        priority
      />
      <Styled.Info>
        <Styled.Title variant="h1">{title}</Styled.Title>
        <Link href={`/${category}`}>{capitalizeFirstLetter(category)}</Link>
        <Typography variant="body1"> {description}</Typography>
        <Styled.Price>
          <Styled.Rating>
            <Rating precision={0.5} value={rating.rate} readOnly />
            <span>({rating.count})</span>
          </Styled.Rating>
          <span style={{ fontWeight: 700, fontSize: "22px" }}>$ {price}</span>
        </Styled.Price>
        <Styled.Button
          variant="text"
          onClick={() => dispatch(addProductsCart(id))}
          {...(!!productsCart.find((product) => product.id === id) && {
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
