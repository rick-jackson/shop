import { Container, ButtonGroup } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import * as Styled from "./Counter.styled";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <Container sx={{ padding: "0 !important", display: "contents" }}>
      <ButtonGroup>
        <Styled.Button onClick={onDecrement} disabled={count === 1}>
          <RemoveIcon fontSize="small" />
        </Styled.Button>
        <Styled.Input size="small" value={count} disabled />
        <Styled.Button onClick={onIncrement}>
          <AddIcon fontSize="small" />
        </Styled.Button>
      </ButtonGroup>
    </Container>
  );
};

export default Counter;
