import { type GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import type { Product } from "src/types/entities/product";
import { getCategoryProducts } from "@gateways/getProducts";
import { getCategories } from "@gateways/getCategories";
import ProductsList from "@components/Products/List";
import Layout from "@components/Layout";

type CategoryPageProps = {
  products: Product[];
  categories: string[];
};

const CategoryPage: NextPage<CategoryPageProps> = ({
  products,
  categories,
}) => {
  const { query } = useRouter();

  return (
    <Layout categories={categories} links={[query.category as string]}>
      <ProductsList products={products} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const products = await getCategoryProducts(ctx.query.category as string);
    const categories = await getCategories();

    return { props: { products, categories } };
  } catch (error) {
    return {
      redirect: {
        destination: `/error`,
        permanent: false,
      },
    };
  }
};

export default CategoryPage;
