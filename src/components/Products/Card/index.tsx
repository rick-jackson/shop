import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { addShopping } from "@store/actions/shopping";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useAppDispatch, useAppSelector } from "@common/hooks/redux";

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
      <Card
        sx={{
          maxWidth: 385,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{ objectFit: "contain", padding: "12px" }}
          component="img"
          height="194"
          image={image}
          alt={title}
        />
        <CardContent
          sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <Link href={`/${category}/${id}`}>{title}</Link>
          <span>{category}</span>
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
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
