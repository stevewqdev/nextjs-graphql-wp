import Head from 'next/head'
import Main from "../lib/layout";
import React, { Component } from 'react';

class HomePage extends Component {
  render () {
  return (
    <>
      <div className="container">
        <Head>
          <title>Home </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main>
          <div>
            <p>Home</p>
          </div>
        </Main>
      </div>
    </>
  );
}
}

export default HomePage
