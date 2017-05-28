import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.postTitle,
      description: props.postDescription
    };
  }

  render() {
    return (
      <div className='single-post'>
        <h2 className='single-post__title'>{this.state.title}</h2>
        <span className='single-post__description'>{this.state.description}</span>
      </div>
    );
  }
}

module.exports = Post;