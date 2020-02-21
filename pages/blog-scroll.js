import React, { Component } from 'react';
import Layout from "../components/layout";
import Head from 'next/head'
import PostListScroll from '../components/postListScroll/index'

class BlogScroll extends Component {
  render() {
    return (
      <>
        <Layout>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="blog__wrapper">
            <PostListScroll />
          </div>
        </Layout>
      </>
    )
  }
}

export default BlogScroll