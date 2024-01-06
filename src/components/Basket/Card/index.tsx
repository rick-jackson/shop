import Image from "next/image";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { deleteShopping, incrementShopping } from "@store/actions/shopping";
import { useAppDispatch } from "@common/hooks/redux";
import Counter from "@components/UI/Counter";
import Link from "@components/Link";

import * as Styled from "./Card.styled";

type BasketCardProps = any;

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
          <IconButton onClick={() => dispatch(deleteShopping(id))}>
            <CloseIcon />
          </IconButton>
        </Styled.Text>
        <Styled.Actions>
          <span>$ {(price * count).toLocaleString()}</span>
          <Counter
            count={count}
            onIncrement={() =>
              dispatch(incrementShopping({ id, action: "increment" }))
            }
            onDecrement={() =>
              dispatch(incrementShopping({ id, action: "decrement" }))
            }
          />
        </Styled.Actions>
      </Styled.Info>
    </Styled.Container>
  );
};

export default BasketCard;
