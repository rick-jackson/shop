import Image from "next/image";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { createFilterOptions } from "@mui/material/Autocomplete";

import type { Product } from "src/types/entities/product";
import useAutocomplete from "@common/hooks/useAutocomplete";
import Link from "@components/Link";

import * as Styled from "./Search.styled";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: Product) => option.title,
});

const Search: React.FC = () => {
  const { loading, options, handleClose, handleOpen, open } = useAutocomplete();

  return (
    <Styled.Search>
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>
      <Styled.InputBase
        options={options}
        getOptionLabel={(option: Product) => option.title}
        filterOptions={filterOptions}
        renderInput={(params) => <TextField {...params} />}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        loading={loading}
        renderOption={(_, option: Product) => (
          <Styled.ListItem key={option.id} onClick={handleClose}>
            <Link href={`/${option.category}/${option.id}`}>
              <Image
                src={option.image}
                alt={option.title}
                width={30}
                height={30}
              />
              <span>{option.title}</span>
            </Link>
          </Styled.ListItem>
        )}
      />
    </Styled.Search>
  );
};

export default Search;
