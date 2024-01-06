import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Tooltip,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Search from "@components/UI/Serch";
import { useAppDispatch, useAppSelector } from "@common/hooks/redux";
import { useEffect } from "react";
import { getShoppings } from "@store/actions/shopping";
import Link from "next/link";
import Basket from "@components/Basket";

type HeaderProps = {
  onToggleCategories: () => void;
  hiddenSidebar?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  onToggleCategories,
  hiddenSidebar,
}) => {
  const { shoppings } = useAppSelector((state) => state.shoppings);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getShoppings());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppBar sx={{ zIndex: 9999999 }} position="static">
      <Toolbar>
        {!hiddenSidebar && (
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
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          MUI
        </Typography>
        <Search />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex" }}>
          <Tooltip title={<Basket />} enterDelay={700} placement="bottom-start">
            <IconButton size="large" color="inherit">
              <Badge badgeContent={shoppings.length} color="error">
                <Link href="/basket" style={{ color: "#fff" }}>
                  <ShoppingCartOutlinedIcon />
                </Link>
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
