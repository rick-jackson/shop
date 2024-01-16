import theme from "@theme/index";
import styled from "styled-components";

export const Info = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${theme.breakpoints.down("md")} {
    h3 {
      font-size: 32px;
    }
  }

  svg {
    font-size: 15em;
  }
`;
