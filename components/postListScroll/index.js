import React, { Component } from 'react';
const axios = require('axios');


class PostList extends Component {
  state = {
    nextPage: 1, 
    posts: [],
    items: [],
    loadMore: true, 
  }

  componentDidMount(){
    this.returnPosts(this.state.nextPage)
  }

  returnPosts() {
    const pageNumber = this.state.nextPage; 
    axios.get(
    `https://gatsby.raxo.dev/wp-json/wp/v2/posts?page=${pageNumber}`, {
    })
    .then(response => {
      // we update the state
      var olderPosts = this.state.posts
      var currentPosts = response.data

      this.setState({
        posts: olderPosts.concat(response.data),
        nextPage: this.state.nextPage + 1, 
      })

      if(currentPosts.length < 10){
        this.setState({
            loadMore: false, 
        })   
      }
    
      const { posts } = this.state
      var items = []; 
      if(posts){
          posts.map((post, index) => {
              var content = `
                <div key={${post.id}-${this.state.nextPage}}>
                    <h3>${index}</h3>
                    <div className="title">
                        <h5>${post.title.rendered}</h5>
                    </div>
                    <div className="excerpt">
                        <p> ${post.excerpt.rendered} </p>
                    </div>
                    <div className="meta">
                        <div className="date">
                            <p>${post.date}</p>
                        </div>
                    </div>
                    <div className="read_more">
                        <button><a href={blog/${post.slug}} as={blog/${post.slug}}>Read Article</a></button>
                    </div>
                </div>
                `
              items.push(content);
          });
      }

      this.setState({
        items: items,
      })

    })
  }

  render() {
    return (
        <div>
            <div className="tracks">
                {
                    this.state.items.map((element, index) => (
                        <div dangerouslySetInnerHTML={{__html: element}} key={index}/>
                    ))
                }
            </div>
            {
                this.state.loadMore
                ? <button onClick={this.returnPosts.bind(this)}>Load More</button>
                : <p> There are no more posts to load... </p>
            }
            
        </div>
    )
  }
}
export default PostList