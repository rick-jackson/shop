import type { NextPage } from "next";

type ErrorProps = {
  statusCode: number;
};

const customError: NextPage<ErrorProps> = ({ statusCode }) => (
  <div>{statusCode}</div>
);

customError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default customError;
