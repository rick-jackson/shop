import { Grid, CardMedia, Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useAppDispatch, useAppSelector } from "@common/hooks/redux";
import { addShopping } from "@store/actions/shopping";
import Link from "@components/Link";

import * as Styled from "./Card.styled";

type ProductCardProps = {} & any;

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  category,
  price,
}) => {
  const dispatch = useAppDispatch();
  const { shoppings } = useAppSelector((state) => state.shoppings);
  const isPurchasedProduct = !!shoppings.find((el) => el.id === id);

  return (
    <Grid item xs={2} sm={4} md={4} key={id}>
      <Styled.Card>
        <CardMedia
          sx={{ objectFit: "contain", padding: "12px" }}
          component="img"
          height="194"
          image={image}
          alt={title}
        />
        <Styled.Content>
          <Link style={{ fontSize: "20px" }} href={`/${category}/${id}`}>
            {title}
          </Link>
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
              dispatch(addShopping(id));
            }}
            disabled={isPurchasedProduct}
            sx={{ gap: "8px", alignItems: "center" }}
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
        </Styled.Content>
      </Styled.Card>
    </Grid>
  );
};

export default ProductCard;
