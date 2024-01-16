import Layout from "@components/Layout";
import { NextPage } from "next";

import PlacingOrder from "@components/PlacingOrder";

const PlacingOrderPage: NextPage = () => {
  return (
    <Layout links={["cart", "placing-order"]}>
      <PlacingOrder />
    </Layout>
  );
};

export default PlacingOrderPage;
