import React, { Component } from 'react';
import Main from "../lib/layout";
import Head from 'next/head'
import PostList from '../components/postList/index'

class Blog extends Component {
  render() {
    return (
      <>
        <Main>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="blog__wrapper">
            <PostList />
          </div>
        </Main>
      </>
    )
  }
}

export default Blog