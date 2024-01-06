import Basket from "@components/Basket";
import Layout from "@components/Layout";
import { NextPage } from "next";

const BasketPage: NextPage = () => {
  return (
    <Layout hiddenSidebar links={["shoppings"]}>
      <Basket />
    </Layout>
  );
};

export default BasketPage;
