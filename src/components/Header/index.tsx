import Image from "next/image";
import { useEffect } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { AppBar, Box, Typography, Badge, useMediaQuery } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useAppDispatch, useAppSelector } from "@common/hooks/redux";
import { getProductsCart } from "@store/actions/productsCart";
import Search from "@components/UI/Serch";
import Link from "@components/Link";
import theme from "@theme/index";

import * as Styled from "./Header.styled";

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
      <Styled.Toolbar>
        {isShowCategories && matches && (
          <Styled.Button size="large" onClick={onToggleCategories}>
            <GridViewIcon />
          </Styled.Button>
        )}
        <Styled.Logo
          href="/"
          $isShowCategories={isShowCategories}
          style={{ textDecoration: "none" }}
        >
          <Image src="/img/logo.png" alt="logo" height={30} width={30} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Shop
          </Typography>
        </Styled.Logo>
        <Search />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex" }}>
          <Styled.Button size="large">
            <Badge badgeContent={productsCart.length} color="error">
              <Link href="/cart" style={{ color: "#fff" }}>
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </Styled.Button>
        </Box>
      </Styled.Toolbar>
    </AppBar>
  );
};

export default Header;
