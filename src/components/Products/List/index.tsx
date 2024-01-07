import { Grid } from "@mui/material";
import ProductCard from "../Card";
import type { Product } from "src/types/entities/product";

type ProductsList = {
  products: Product[];
};

const ProductsList: React.FC<ProductsList> = ({ products }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
      sx={{ marginBottom: "12px" }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
};

export default ProductsList;
