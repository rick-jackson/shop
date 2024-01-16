import Link from "@components/Link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Image from "next/image";
import { Product } from "src/types/entities/product";

type OrderTableProps = {
  products: Product[];
  productsCart: { id: number; count: number }[];
};

const OrderTable: React.FC<OrderTableProps> = ({ products, productsCart }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Count</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsCart.map(({ id, count }) => {
            const { title, image, price, category } = products?.find(
              (el) => el.id === id
            );
            return (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Image
                    src={image}
                    alt={title}
                    width={30}
                    height={30}
                    style={{ objectFit: "contain" }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <Link target="_blank" href={`/${category}/${id}`}>
                    {title}
                  </Link>
                </TableCell>
                <TableCell component="th" scope="row">
                  {count}
                </TableCell>
                <TableCell component="th" scope="row">
                  $ {price}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
