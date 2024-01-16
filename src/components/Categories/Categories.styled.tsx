import styled from "styled-components";
import { List as MuiList, Drawer as MuiDrawer } from "@mui/material";
import theme from "@theme/index";

export const List = styled(MuiList)`
  gap: 12px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  padding: 12px;

  ${theme.breakpoints.down("md")} {
    font-size: 32px;
    margin: 80px auto auto;
  }
`;

export const Drawer = styled(MuiDrawer)`
  height: 100%;

  .MuiPaper-root {
    width: 50%;

    ${theme.breakpoints.down("sm")} {
      width: 100%;
    }
  }
`;
