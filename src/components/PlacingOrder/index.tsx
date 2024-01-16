import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { filterProducts } from "@common/utils/filterProducts";
import { useAppSelector } from "@common/hooks/redux";
import useShopping from "@common/hooks/useShopping";
import InfoBlock from "@components/InfoBlock";
import OrderForm from "./Form";
import OrderTable from "./Table";

const PlacingOrder: React.FC = () => {
  const [isSubmit, setSubmit] = useState(false);
  const { products, isLoading } = useShopping();
  const { productsCart } = useAppSelector((state) => state.productsCart);
  const router = useRouter();

  useEffect(() => {
    if (!productsCart.length && !isLoading) {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) return <CircularProgress sx={{ margin: "auto" }} />;

  if (isSubmit)
    return (
      <InfoBlock
        icon={<TaskAltIcon color="success" />}
        text="The order has been sent"
      />
    );

  if (!!productsCart.length) {
    return (
      <>
        <OrderTable productsCart={productsCart} products={products} />
        <OrderForm
          products={filterProducts(products, productsCart)}
          onSubmitting={setSubmit}
        />
      </>
    );
  }
};

export default PlacingOrder;
