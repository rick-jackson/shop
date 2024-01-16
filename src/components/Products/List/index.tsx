import { Grid, Pagination } from "@mui/material";

import type { Product } from "src/types/entities/product";
import usePagination from "@common/hooks/usePagination";
import ProductCard from "../Card";

type ProductsList = {
  products: Product[];
};

const ProductsList: React.FC<ProductsList> = ({ products }) => {
  const { productsToDisplay, handlePageChange, count, currentPage } =
    usePagination(products);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 2, lg: 12 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
        sx={{ marginBottom: "12px" }}
      >
        {productsToDisplay.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Grid>
      <Pagination
        sx={{ margin: "auto auto 0" }}
        count={count}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
    </>
  );
};

export default ProductsList;
