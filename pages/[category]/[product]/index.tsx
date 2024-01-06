import Layout from "@components/Layout";
import { Button, Rating, Typography } from "@mui/material";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useAppDispatch, useAppSelector } from "@common/hooks/redux";
import { addShopping } from "@store/actions/shopping";

type ProductPageProps = {
  product: any;
};

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const { shoppings } = useAppSelector((state) => state.shoppings);
  const dispatch = useAppDispatch();
  const isPurchasedProduct = !!shoppings.find((el) => el.id === product.id);

  return (
    <Layout hiddenSidebar links={[product.category, product.title]}>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
          paddingTop: "50px",
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={0}
          height={0}
          sizes="100vw"
          priority
          style={{ width: "40%", height: "auto", objectFit: "contain" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Typography variant="h1" fontSize="28px">
            {product.title}
          </Typography>
          <span>{product.category}</span>
          <Typography variant="body1"> {product.description}</Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating precision={0.5} value={product.rating.rate} readOnly />{" "}
              <span>({product.rating.count})</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: "22px" }}>
              $ {product.price}
            </span>
          </div>
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
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${ctx.query.product}`
  );

  return {
    props: { product: data },
  };
};

export default ProductPage;
