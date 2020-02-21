import Head from 'next/head'
import Layout from "../components/layout";
import React, { Component } from 'react';

class HomePage extends Component {
  render () {
  return (
    <>
      <Layout>
        <Head>
          <title>Home </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <p>Home</p>
        </div>
      </Layout>
    </>
  );
}
}

export default HomePage
