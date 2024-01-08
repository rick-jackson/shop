import styled from "styled-components";
import NextLink from "next/link";

export const Link = styled(NextLink)`
  color: #000;
  text-decoration: none;
  margin: 0;
  padding: 0;
  display: flex;

  &:hover {
    text-decoration: underline;
  }
`;
