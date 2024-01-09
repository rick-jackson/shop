import { Grid, CardMedia, Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import type { Product } from "src/types/entities/product";
import { useAppDispatch, useAppSelector } from "@common/hooks/redux";
import { addProductsCart } from "@store/actions/productsCart";
import Link from "@components/Link";

import * as Styled from "./Card.styled";

const ProductCard: React.FC<Product> = ({
  id,
  image,
  title,
  category,
  price,
}) => {
  const dispatch = useAppDispatch();
  const { productsCart } = useAppSelector((state) => state.productsCart);
  const isPurchasedProduct = !!productsCart.find((el) => el.id === id);

  return (
    <Grid item xs={2} sm={4} md={4} key={id}>
      <Styled.Card>
        <Styled.Content>
          <Styled.Link href={`/${category}/${id}`}>
            <CardMedia
              sx={{ objectFit: "contain", padding: "12px" }}
              component="img"
              height="194"
              image={image}
              alt={title}
            />
            {title}
          </Styled.Link>
          <Link href={`/${category}`}>{category}</Link>
          <Typography
            variant="h5"
            sx={{ textAlign: "right", marginTop: "auto" }}
          >
            $ {price}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(addProductsCart(id));
            }}
            disabled={isPurchasedProduct}
            sx={{ gap: "8px", alignItems: "center" }}
          >
            {isPurchasedProduct ? (
              <>
                In cart <CheckCircleOutlineIcon />
              </>
            ) : (
              <>
                Add to cart
                <ShoppingCartOutlinedIcon />
              </>
            )}
          </Button>
        </Styled.Content>
      </Styled.Card>
    </Grid>
  );
};

export default ProductCard;
