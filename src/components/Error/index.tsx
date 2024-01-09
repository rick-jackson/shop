import { Typography } from "@mui/material";

import * as Styled from "./Error.styled";

type ErrorProps = {
  statusCode: number;
  text?: string;
};

const Error: React.FC<ErrorProps> = ({ statusCode, text }) => {
  return (
    <Styled.Error>
      <Typography variant="h1">{statusCode}</Typography>
      {text && <Typography variant="h2">{text}</Typography>}
    </Styled.Error>
  );
};

export default Error;
