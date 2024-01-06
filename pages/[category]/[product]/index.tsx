import Layout from "@components/Layout";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Product from "@components/Products";

type ProductPageProps = {
  product: any;
};

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <Layout hiddenSidebar links={[product.category, product.title]}>
      <Product product={product} />
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
