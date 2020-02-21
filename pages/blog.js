import React, { Component } from 'react';
import Layout from "../components/layout";
import Head from 'next/head'
import PostList from '../components/postList/index'

class Blog extends Component {
  render() {
    return (
      <>
        <Layout>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="blog__wrapper">
            <PostList />
          </div>
        </Layout>
      </>
    )
  }
}

export default Blog