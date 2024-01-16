import styled from "styled-components";
import NextImage from "next/image";
import theme from "@theme/index";
import { Typography, Button as MuiButton } from "@mui/material";

export const Container = styled.div`
  width: 100%;
  gap: 20px;

  ${theme.breakpoints.up("md")} {
    display: flex;
    padding-top: 50px;
  }
`;

export const Image = styled(NextImage)`
  width: 40%;
  height: auto;
  object-fit: contain;
  max-height: 500px;

  ${theme.breakpoints.down("md")} {
    width: 60%;
    display: block;
    margin: auto;
    margin-bottom: 24px;
  }
`;

export const Title = styled(Typography)`
  font-size: 28px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 50%;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Button = styled(MuiButton)`
  gap: 8px;
  align-items: center;
  margin-left: auto;
`;
