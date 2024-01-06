import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  margin: auto;
  gap: 12px;
`;

export const List = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  gap: 20px;
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
  width: 320px;
`;

export const EmptyShoppingCart = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
