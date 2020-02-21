import React, { Component } from 'react';
import Main from "../lib/layout";
import Head from 'next/head'
import PostListScroll from '../components/postListScroll/index'

class BlogScroll extends Component {
  render() {
    return (
      <>
        <Main>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="blog__wrapper">
            <PostListScroll />
          </div>
        </Main>
      </>
    )
  }
}

export default BlogScroll