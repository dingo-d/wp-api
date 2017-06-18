import React from 'react';
import DataStore from './../../stores/DataStore.js';
var Post = require('./Post');

function PostList(props) {
  let allPosts = props.posts;

  return (
    <div className='post-wrapper'>
      {allPosts.map( (post, index) => {
        return (
          <Post key={index} postTitle={post.title.rendered} postDescription={post.excerpt.rendered} />
        )
      })}
    </div>
  )
}

class Home extends React.Component {

  render() {
    let posts = DataStore.getAllPosts();

    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
  }
}

module.exports = Home;