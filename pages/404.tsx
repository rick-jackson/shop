import { NextPage } from "next";
import Error from "@components/Error";

const ErrorPage: NextPage = () => {
  return <Error statusCode={404} text="Page not found" />;
};

export default ErrorPage;
