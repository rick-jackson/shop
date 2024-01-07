import { Box, Paper } from "@mui/material";
import theme from "@theme/index";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  margin: 0px auto;
  gap: 12px;
  width: 100%;
  max-width: 1000px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const List = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  gap: 20px;
  width: 100%;
`;

export const Total = styled(Paper)`
  height: fit-content;
  position: sticky;
  top: 20px;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 380px;
`;

export const EmptyShoppingCart = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${theme.breakpoints.down("md")} {
    h3 {
      font-size: 32px;
    }
  }
`;
