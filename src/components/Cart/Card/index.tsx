import Image from "next/image";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import type { Product } from "src/types/entities/product";
import {
  deleteProductsCart,
  incrementProductsCart,
} from "@store/actions/productsCart";
import { useAppDispatch } from "@common/hooks/redux";
import Counter from "@components/UI/Counter";
import Link from "@components/Link";

import * as Styled from "./Card.styled";

type BasketCardProps = {
  id: number;
  count: number;
  products: Product[];
};

const BasketCard: React.FC<BasketCardProps> = ({ id, count, products }) => {
  const dispatch = useAppDispatch();

  const { title, image, category, price } = products?.find(
    (el) => el.id === id
  );

  return (
    <Styled.Container>
      <Image
        src={image}
        width={100}
        height={100}
        alt={title}
        style={{ objectFit: "contain" }}
      />
      <Styled.Info>
        <Styled.Text>
          <Link href={`/${category}/${id}`}>{title}</Link>
          <IconButton
            sx={{ marginBottom: "auto" }}
            size="small"
            onClick={() => dispatch(deleteProductsCart(id))}
          >
            <CloseIcon />
          </IconButton>
        </Styled.Text>
        <Styled.Actions>
          <span>$ {(price * count).toLocaleString()}</span>
          <Counter
            count={count}
            onIncrement={() =>
              dispatch(incrementProductsCart({ id, action: "increment" }))
            }
            onDecrement={() =>
              dispatch(incrementProductsCart({ id, action: "decrement" }))
            }
          />
        </Styled.Actions>
      </Styled.Info>
    </Styled.Container>
  );
};

export default BasketCard;
