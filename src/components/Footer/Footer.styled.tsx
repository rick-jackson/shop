import Link from "@components/Link";
import theme from "@theme/index";
import styled from "styled-components";

export const Footer = styled.footer`
  background: ${theme.palette.primary.main};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconLink = styled(Link)`
  color: #fff;
`;
