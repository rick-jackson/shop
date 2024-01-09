import type { NextPage } from "next";
import Error from "@components/Error";

type ErrorProps = {
  statusCode: number;
};

const customError: NextPage<ErrorProps> = ({ statusCode }) => (
  <Error statusCode={statusCode} />
);
customError.getInitialProps = ({ res, err }) => {
  const statusCode = res.statusCode || err.statusCode || 500;
  return { statusCode };
};

export default customError;
