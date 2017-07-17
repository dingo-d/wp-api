import React, {Component} from 'react';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.postTitle,
      description: props.postDescription
    };
  }

  // To do: see how to add DOMPurify to check the data for the security
  // https://github.com/cure53/DOMPurify

  render() {
    return (
      <div className='single-post'>
        <h2 className='single-post__title' dangerouslySetInnerHTML={{__html: this.state.title}} />
        <div className='single-post__description' dangerouslySetInnerHTML={{__html: this.state.description}} />
      </div>
    );
  }
}

export default Post;