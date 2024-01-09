import { CardContent, Card as MuiCard } from "@mui/material";
import theme from "@theme/index";
import styled from "styled-components";
import CustomLink from "@components/Link";

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

export const Link = styled(CustomLink)`
  font-size: 20px;
  display: flex;
  flex-direction: column;

  img {
    transition: 0.2s;
    overflow: hidden;
    object-fit: contain;
    margin-bottom: 12px;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
