import styled from "styled-components";
import { Drawer as MuiDrawer, List as MuiList } from "@mui/material";
import theme from "@theme/index";

export const Drawer = styled(MuiDrawer)<{ $isOpenDrawer: boolean }>`
  .MuiDrawer-paper {
    transition: 0.2s;
    width: ${({ $isOpenDrawer }) => (!$isOpenDrawer ? 0 : "fit-content")};
    border: none;

    ${theme.breakpoints.up("md")} {
      position: relative;
    }
  }
`;

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
