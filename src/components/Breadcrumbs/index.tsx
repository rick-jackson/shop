import Stack from "@mui/material/Stack";
import HomeIcon from "@mui/icons-material/Home";

import { capitalizeFirstLetter } from "@common/utils/capitalizeFirstLetter";
import Link from "@components/Link";

import * as Styled from "./Breadcrumbs.styled";

type Breadcrumbs = {
  links: string[];
};

const Breadcrumbs: React.FC<Breadcrumbs> = ({ links }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        borderBottom: "1px solid grey",
        marginBottom: "24px",
      }}
    >
      <Styled.Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link href="/">
          <HomeIcon />
        </Link>

        {links.map((link, index) => (
          <div key={link}>
            {index + 1 !== links.length ? (
              <Link href={`/${link}`}>{capitalizeFirstLetter(link)}</Link>
            ) : (
              <span>{capitalizeFirstLetter(link)}</span>
            )}
          </div>
        ))}
      </Styled.Breadcrumbs>
    </Stack>
  );
};

export default Breadcrumbs;
