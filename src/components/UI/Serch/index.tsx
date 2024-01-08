import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { createFilterOptions } from "@mui/material/Autocomplete";

import type { Product } from "src/types/entities/product";
import Link from "@components/Link";

import * as Styled from "./Search.styled";

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: Product) => option.title,
});

const Search: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    })();
  }, []);

  return (
    <Styled.Search>
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>
      <Styled.InputBase
        options={products}
        getOptionLabel={(option: Product) => option.title}
        filterOptions={filterOptions}
        sx={{ maxWidth: 300 }}
        renderInput={(params) => <TextField {...params} />}
        renderOption={(_, option: any) => (
          <li
            style={{
              padding: "4px",
              maxWidth: "250px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            <Image
              src={option.image}
              alt={option.title}
              width={30}
              height={30}
              style={{ marginRight: "8px", objectFit: "contain" }}
            />
            <Link
              style={{ display: "inline" }}
              href={`/${option.category}/${option.id}`}
            >
              {option.title}
            </Link>
          </li>
        )}
      />
    </Styled.Search>
  );
};

export default Search;
