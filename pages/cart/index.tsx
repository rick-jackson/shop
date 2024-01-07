import { NextPage } from "next";

import Cart from "@components/Cart";
import Layout from "@components/Layout";

const CartPage: NextPage = () => {
  return (
    <Layout links={["cart"]}>
      <Cart />
    </Layout>
  );
};

export default CartPage;
