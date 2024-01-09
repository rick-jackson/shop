import { type GetServerSideProps, NextPage } from "next";

import type { Product as ProductType } from "src/types/entities/product";
import { getProduct } from "@gateways/getProducts";
import Product from "@components/Products";
import Layout from "@components/Layout";

type ProductPageProps = {
  product: ProductType;
};

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <Layout links={[product.category, product.title]}>
      <Product product={product} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const product = await getProduct(+ctx.query.product);

    return {
      props: { product },
    };
  } catch (error) {
    return {
      redirect: {
        destination: `/error`,
        permanent: false,
      },
    };
  }
};

export default ProductPage;
