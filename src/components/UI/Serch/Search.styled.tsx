import { styled as MuiStyled, alpha } from "@mui/material/styles";
import { Autocomplete, ListItemButton as MuiListItem } from "@mui/material";
import styled from "styled-components";

export const Search = MuiStyled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  height: "48px",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // margin: `0 ${theme.spacing(3)}`,
  },
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

  svg {
    display: none;
  }

  fieldset {
    display: none;
  }

  input {
    color: #fff;
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
