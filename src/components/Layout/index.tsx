import { useState } from "react";
import { Box } from "@mui/material";

import Header from "@components/Header";

import Breadcrumbs from "@components/Breadcrumbs";
import Categories from "@components/Categories";

type LayoutProps = {
  children: JSX.Element;
  links?: string[];
  categories?: string[];
};

const Layout: React.FC<LayoutProps> = ({ children, categories, links }) => {
  const [isOpenCategories, setOpenCategories] = useState(false);

  const handleToggleCategoies = () => {
    setOpenCategories(!isOpenCategories);
  };

  return (
    <>
      <Header
        onToggleCategories={handleToggleCategoies}
        isShowCategories={!!categories?.length}
      />
      <Box display="flex" flex={1}>
        {!!categories?.length && (
          <Categories
            categories={categories}
            isOpenCategories={isOpenCategories}
            onToggleCategoies={handleToggleCategoies}
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
