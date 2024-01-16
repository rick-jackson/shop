import { styled as MuiStyled, alpha } from "@mui/material/styles";
import { Autocomplete, ListItemButton as MuiListItem } from "@mui/material";
import styled from "styled-components";

export const Search = MuiStyled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 0,
  height: "48px",
  color: "blue",
  border: "1px solid #dbdbdb",
  marginBottom: "12px",
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

export const SearchIconWrapper = MuiStyled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const InputBase = styled(Autocomplete)`
  padding-left: 30px;
  width: 100%;

  svg {
    display: none;
  }

  fieldset {
    display: none;
  }
`;

export const ListItem = styled(MuiListItem)`
  a {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  span {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  img {
    margin-right: 8px;
    object-fit: contain;
  }
`;
