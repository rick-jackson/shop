import React from "react";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

type Breadcrumbs = {
  links: string[];
};

const Breadcrumbs: React.FC<Breadcrumbs> = ({ links }) => {
  return (
    <Stack
      spacing={2}
      sx={{ borderBottom: "1px solid grey", marginBottom: "12px" }}
    >
      <MuiBreadcrumbs separator="›" aria-label="breadcrumb">
        <Link href="/">
          <HomeIcon />
        </Link>
        {links.map((link, index) => (
          <div key={link}>
            {index + 1 !== links.length ? (
              <Link href={`/${link}`}>{link}</Link>
            ) : (
              <span>{link}</span>
            )}
          </div>
        ))}
      </MuiBreadcrumbs>
    </Stack>
  );
};

export default Breadcrumbs;
