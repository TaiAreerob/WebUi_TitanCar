import * as React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
        <link
          href="https://fonts.googleapis.com/css?family=Kanit:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <script src="bower_components/aos/dist/aos.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
