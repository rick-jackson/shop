import Link from "@components/Link";
import { IconButton, Toolbar as MuiToolbar } from "@mui/material";
import theme from "@theme/index";
import styled from "styled-components";

export const Logo = styled(Link)<{ $isShowCategories?: boolean }>`
  color: #fff;
  text-decoration: none;
  display: flex;
  gap: 8px;
  margin: 0 12px;

  ${theme.breakpoints.down("md")} {
    ${({ $isShowCategories }) => $isShowCategories && "margin-left: 0;"}
  }
`;

export const Toolbar = styled(MuiToolbar)`
  max-width: 1600px;
  margin: 0px auto;
  width: 100%;
  padding: 0;
`;

export const Button = styled(IconButton)`
  height: 48px;
  color: #fff;
`;
