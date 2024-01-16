import styled from "styled-components";
import { List as MuiList, Drawer as MuiDrawer } from "@mui/material";
import theme from "@theme/index";

export const List = styled(MuiList)`
  padding: 12px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  ${theme.breakpoints.up("md")} {
    margin-top: 0px;
    padding: 40px;
  }
`;

export const Drawer = styled(MuiDrawer)`
  .MuiPaper-root {
    width: 50%;
    padding: 20px;

    ${theme.breakpoints.down("sm")} {
      width: 100%;
    }
  }
`;
