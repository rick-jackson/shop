import Layout from "@components/Layout";
import ProductsList from "@components/Products/List";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

type CategoryPageProps = {
  products: any;
};

const CategoryPage: NextPage<CategoryPageProps> = ({ products }) => {
  const { query } = useRouter();

  return (
    <Layout links={[query.category as string]}>
      <ProductsList products={products} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/category/${ctx.query.category}`
  );

  return {
    props: { products: data },
  };
};

export default CategoryPage;
