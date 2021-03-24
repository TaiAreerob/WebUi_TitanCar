import * as React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link
          href="http://fonts.googleapis.com/css?family=Roboto:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Sarabun:400,700"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Component {...pageProps} router={router} />
    </>
  );
}
