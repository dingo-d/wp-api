import React, {Component} from 'react';
import DataStore from './../../stores/DataStore.js';
import Post from './Post';

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

class Home extends Component {

  render() {
    let posts = DataStore.getAllPosts();

    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
  }
}

export default Home;