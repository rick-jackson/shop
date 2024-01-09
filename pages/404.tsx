import { NextPage } from "next";
import ErrorIcon from "@mui/icons-material/Error";
import { Typography } from "@mui/material";

const ErrorPage: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Page not found</Typography>
    </div>
  );
};

export default ErrorPage;
