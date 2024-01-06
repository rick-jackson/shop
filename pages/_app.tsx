import Head from "next/head";
import NProgress from "nprogress";
import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { EmotionCache } from "@emotion/react";
import NextNProgress from "nextjs-progressbar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import theme from "@theme";
import ThemeProvider from "@theme/ThemeProvider";
import createEmotionCache from "@theme/createEmotionCache";
import { setupStore } from "@store/index";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const store = setupStore();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  NProgress.configure({ showSpinner: matches ? true : false });

  return (
    <>
      <Head>
        <title>Feline Fortune</title>
        <meta
          name="description"
          content="Fast delivery of goods from Poland and the countries of the European Union to Ukraine"
        />
        {/* <link rel="icon" href="/images/white_logo.png" /> */}
      </Head>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <NextNProgress height={2} color="#EA0C0C" />
          <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            <ThemeProvider theme={theme} emotionCache={emotionCache}>
              <Component {...pageProps} />
            </ThemeProvider>
          </SnackbarProvider>
        </LocalizationProvider>
      </Provider>
    </>
  );
};

export default MyApp;
