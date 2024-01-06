import { styled as MuiStyled, alpha } from "@mui/material/styles";
import { Autocomplete } from "@mui/material";
import styled from "styled-components";

export const Search = MuiStyled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    maxWidth: "300px",
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
