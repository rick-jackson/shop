import { CardContent, Card as MuiCard } from "@mui/material";
import theme from "@theme/index";
import styled from "styled-components";

export const Card = styled(MuiCard)`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: none;
  border: 1px solid #dbdbdb;
  border-radius: 0;

  ${theme.breakpoints.up("md")} {
    max-width: 385px;
  }
`;

export const Content = styled(CardContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
