import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { createFilterOptions } from "@mui/material/Autocomplete";

import type { Product } from "src/types/entities/product";
import Link from "@components/Link";

import * as Styled from "./Search.styled";
import useAutocomplete from "@common/hooks/useAutocomplete";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: Product) => option.title,
});

const Search: React.FC = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get("https://fakestoreapi.com/products");
  //     setProducts(data);
  //   })();
  // }, []);

  const { loading, options, setOpen, open } = useAutocomplete();

  return (
    <Styled.Search>
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>
      <Styled.InputBase
        options={options}
        getOptionLabel={(option: Product) => option.title}
        filterOptions={filterOptions}
        sx={{ maxWidth: 300 }}
        renderInput={(params) => <TextField {...params} />}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        loading={loading}
        renderOption={(_, option: Product) => (
          <Styled.ListItem key={option.id} onClick={() => setOpen(false)}>
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
