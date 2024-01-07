import { useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  useMediaQuery,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useAppDispatch, useAppSelector } from "@common/hooks/redux";
import { getProductsCart } from "@store/actions/productsCart";
import Search from "@components/UI/Serch";
import Link from "@components/Link";
import theme from "@theme/index";

type HeaderProps = {
  onToggleCategories: () => void;
  isShowCategories: boolean;
};

const Header: React.FC<HeaderProps> = ({
  onToggleCategories,
  isShowCategories,
}) => {
  const { productsCart } = useAppSelector((state) => state.productsCart);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsCart());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppBar sx={{ zIndex: 1300 }} position="static">
      <Toolbar>
        {isShowCategories && matches && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={onToggleCategories}
          >
            <GridViewIcon />
          </IconButton>
        )}
        <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Shop
          </Typography>
        </Link>
        <Search />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex" }}>
          <IconButton size="large" color="inherit" sx={{ height: "48px" }}>
            <Badge badgeContent={productsCart.length} color="error">
              <Link href="/cart" style={{ color: "#fff" }}>
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
