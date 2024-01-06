import styled from "styled-components";
import { Drawer as MuiDrawer } from "@mui/material";
import theme from "@theme/index";

export const Drawer = styled(MuiDrawer)<{ $width: number }>`
  .MuiDrawer-paper {
    transition: 0.2s;
    width: ${({ $width }) => $width}px;

    ${theme.breakpoints.up("md")} {
      position: relative;
    }
  }
`;
