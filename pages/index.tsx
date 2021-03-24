import Layout from "../components/Layout";
import Head from "next/head";

export default (props) => (
  <div>
    <Head>
      <title> • TitanCar</title>
      <meta charSet="utf-8" />
    </Head>
    <Layout {...props} />
  </div>
);
