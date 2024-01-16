import { type GetServerSideProps, NextPage } from "next";

import type { Product } from "src/types/entities/product";
import { getCategories } from "@gateways/getCategories";
import { getAllProducts } from "@gateways/getProducts";
import ProductsList from "@components/Products/List";
import Layout from "@components/Layout";

type HomePageProps = {
  products: Product[];
  categories: string[];
};

const HomePage: NextPage<HomePageProps> = ({ products, categories }) => {
  return (
    <Layout categories={categories}>
      <ProductsList products={products} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const products = await getAllProducts();
    const categories = await getCategories();

    return {
      props: { products, categories },
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

export default HomePage;
