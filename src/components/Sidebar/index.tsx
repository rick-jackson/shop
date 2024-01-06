import { useEffect, useState } from "react";
import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";

import { getCategories } from "@gateways/getCategories";

import * as Styled from "./Sidebar.styled";

const drawerWidth = 240;

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
      <Styled.Drawer
        variant="permanent"
        $width={isOpenCategories ? drawerWidth : 0}
      >
        <Box>
          <List
            sx={{
              padding: "12px",
              gap: "12px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {categories.map((text) => (
              <ListItem key={text} disablePadding>
                <Link
                  style={{ color: "#000", textDecoration: "none" }}
                  href={`/${text}`}
                >
                  {text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Styled.Drawer>
    </Box>
  );
};

export default Sidebar;
