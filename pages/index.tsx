import Layout from "../components/Layout";
import Head from "next/head";
import React, { Component } from "react";

interface Props {}
interface State {}
export default class HomeApp extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <Head>
            <title> • TitanCar</title>
            <meta charSet="utf-8" />
          </Head>
        </div>
        <div style={{ height: 60 }}>
          <Layout />
        </div>
      </>
    );
  }
}
