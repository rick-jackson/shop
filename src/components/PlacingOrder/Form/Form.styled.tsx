import theme from "@theme/index";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Inputs = styled.div`
  display: flex;
  gap: 20px;

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 0;
  }
`;
