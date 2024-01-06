import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { Pagination } from "@mui/material";
import Layout from "@components/Layout";
import { useState } from "react";
import ProductsList from "@components/Products/List";

type HomePageProps = {
  products: any;
};

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const productsToDisplay = products.slice(startIndex, endIndex);

  const handlePageChange = (_, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Layout>
      <>
        <ProductsList products={productsToDisplay} />
        <Pagination
          sx={{ margin: "auto" }}
          count={Math.ceil(products.length / itemsPerPage)}
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
  const { data } = await axios.get("https://fakestoreapi.com/products");

  return {
    props: { products: data },
  };
};

export default HomePage;
