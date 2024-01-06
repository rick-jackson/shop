import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";

import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import Breadcrumbs from "@components/Breadcrumbs";
import theme from "@theme/index";

type LayoutProps = {
  children: JSX.Element;
  hiddenSidebar?: boolean;
  links?: string[];
};

const Layout: React.FC<LayoutProps> = ({ children, hiddenSidebar, links }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [isOpenCategories, setOpenCategories] = useState(true);

  const handleToggleCategoies = () => {
    setOpenCategories(!isOpenCategories);
  };

  return (
    <>
      <Header
        onToggleCategories={handleToggleCategoies}
        hiddenSidebar={hiddenSidebar}
      />
      <Box display="flex" flex={1}>
        {!hiddenSidebar && (
          <Sidebar
            isOpenCategories={matches ? isOpenCategories : !isOpenCategories}
          />
        )}
        <Box
          component="main"
          p={3}
          sx={{
            width: "100%",
            maxWidth: "1360px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {links && <Breadcrumbs links={links} />}
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
