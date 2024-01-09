import React from "react";
import { NextPage } from "next";
import Error from "@components/Error";

const ErrorPage: NextPage = () => <Error statusCode={500} />;

export default ErrorPage;
