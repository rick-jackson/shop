import React, { useState } from "react";

import Breadcrumbs from "@components/Breadcrumbs";
import Categories from "@components/Categories";
import Header from "@components/Header";
import Footer from "@components/Footer";

import * as Styled from "./Layout.styled";

type LayoutProps = {
  children: React.ReactNode;
  links?: string[];
  categories?: string[];
};

const Layout: React.FC<LayoutProps> = ({ children, categories, links }) => {
  const [isOpenCategories, setOpenCategories] = useState(false);
  const isCategories = !!categories?.length;

  const handleToggleCategoies = () => {
    setOpenCategories(!isOpenCategories);
  };

  return (
    <>
      <Header
        onToggleCategories={handleToggleCategoies}
        isShowCategories={isCategories}
      />
      <Styled.Wrapper>
        {isCategories && (
          <Categories
            categories={categories}
            isOpenCategories={isOpenCategories}
            onToggleCategoies={handleToggleCategoies}
          />
        )}
        <Styled.Container component="main">
          {links && <Breadcrumbs links={links} />}
          {children}
        </Styled.Container>
      </Styled.Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
