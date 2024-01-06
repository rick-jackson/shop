import { useEffect, useState } from "react";
import { Box, ListItem } from "@mui/material";

import { getCategories } from "@gateways/getCategories";
import Link from "@components/Link";

import * as Styled from "./Sidebar.styled";

type SidebarProps = {
  isOpenCategories: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpenCategories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();
  }, []);

  return (
    <Box component="aside" sx={{ display: "flex" }}>
      <Styled.Drawer variant="permanent" $isOpenDrawer={isOpenCategories}>
        <Box>
          <Styled.List>
            {categories.map((text) => (
              <ListItem key={text} disablePadding>
                <Link href={`/${text}`}>{text}</Link>
              </ListItem>
            ))}
          </Styled.List>
        </Box>
      </Styled.Drawer>
    </Box>
  );
};

export default Sidebar;
