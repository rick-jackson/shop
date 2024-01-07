import styled from "styled-components";
import { Card } from "@mui/material";

export const Container = styled(Card)`
  padding: 12px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const Info = styled.div`
  width: 100%;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
