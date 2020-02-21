import React, { Component } from 'react';
import Link from 'next/link'
const axios = require('axios');


class PostList extends Component {
  state = {
    loading: false, 
    nextPage: 2, 
    posts: []
  }

  componentDidMount(){
    this.returnPosts(1)
  }

  returnPosts(pageNumber) {
    this.setState({
      loading: true, 
    })
    axios.get(
    `https://gatsby.raxo.dev/wp-json/wp/v2/posts?page=${pageNumber}`, {
    })
    .then(response => {
      // we update the state
      this.setState({
        posts: response.data, 
        loading: false, 
      })
    })
    .catch(error => {
      this.setState({
        posts: false,
        loading: false, 
      })
    })
  }

  componentWillUnmount(){
    this.setState({
      posts: [],
      loading: false, 
    })
  }

  render() {
    const {loading, posts} = this.state
    return (
      <>
        {
            loading
            ? <p> Loading posts...</p>
            : posts
              ? posts.map((post) => 
                  <div key={post.id}>
                    <div className="title">
                      <h5>{post.title.rendered}</h5>
                    </div>
                    <div className="excerpt">
                      <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                    </div>
                    <div className="meta">
                      <div className="date">
                        <p>{post.date}</p>
                      </div>
                    </div>
                    <div className="read_more">
                      <button>
                        <Link href={`blog/${post.slug}`} as={`blog/${post.slug}`}>
                          <a>Read Article</a>
                        </Link>
                      </button>
                    </div>
                  </div>
                )
              : <p> It seem's there has been an error, please try again later</p>
        }
        {
          this.state.nextPage > 2
          ?
          <button className={this.state.nextPage - 2} onClick={() => {
            this.returnPosts(this.state.nextPage - 2);
            this.setState({
              nextPage: this.state.nextPage - 2,
            })
          }}>
            Previous Page
          </button>
          :''
        }
        <button className={this.state.nextPage} onClick={() => {
          this.returnPosts(this.state.nextPage);
          this.setState({
            nextPage: this.state.nextPage + 1,
          })
        }}>
          Next Page
        </button>
      </>
    )
  }
}
export default PostList