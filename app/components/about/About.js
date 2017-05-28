import React from 'react';
import DataStore from './../../stores/DataStore.js';

class About extends React.Component {

  render() {
    let page = DataStore.getPageBySlug('about');
    return (
      <div>
        <h1>{page.title.rendered}</h1>
      </div>
    );
  }
}

module.exports = About;