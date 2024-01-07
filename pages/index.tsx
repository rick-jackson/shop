import { type GetServerSideProps, NextPage } from "next";
import { Pagination } from "@mui/material";

import type { Product } from "src/types/entities/product";
import usePagination from "@common/hooks/usePagination";
import { getCategories } from "@gateways/getCategories";
import { getAllProducts } from "@gateways/getProducts";
import ProductsList from "@components/Products/List";
import Layout from "@components/Layout";

type HomePageProps = {
  products: Product[];
  categories: string[];
};

const HomePage: NextPage<HomePageProps> = ({ products, categories }) => {
  const { productsToDisplay, handlePageChange, count, currentPage } =
    usePagination(products);

  return (
    <Layout categories={categories}>
      <>
        <ProductsList products={productsToDisplay} />
        <Pagination
          sx={{ margin: "auto" }}
          count={count}
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getAllProducts();
  const categories = await getCategories();

  return {
    props: { products, categories },
  };
};

export default HomePage;
