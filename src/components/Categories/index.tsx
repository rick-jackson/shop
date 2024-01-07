import { Box, Drawer, ListItem, useMediaQuery } from "@mui/material";

import Link from "@components/Link";
import theme from "@theme/index";

import * as Styled from "./Categories.styled";

type CategoriesProps = {
  categories: string[];
  isOpenCategories: boolean;
  onToggleCategoies: () => void;
};

const Categories: React.FC<CategoriesProps> = ({
  categories,
  isOpenCategories,
  onToggleCategoies,
}) => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const list = (
    <Styled.List>
      {categories.map((text) => (
        <ListItem key={text} disablePadding>
          <Link href={`/${text}`}>{text}</Link>
        </ListItem>
      ))}
    </Styled.List>
  );

  return (
    <>
      {matches ? (
        <Drawer
          anchor="left"
          open={isOpenCategories}
          onClose={onToggleCategoies}
        >
          {list}
        </Drawer>
      ) : (
        <Box component="aside" sx={{ display: "flex" }}>
          {list}
        </Box>
      )}
    </>
  );
};

export default Categories;
