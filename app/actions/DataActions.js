import axios from 'axios';
import alt from './../alt/alt.js';

class DataActions {

  constructor() {
    const appUrl = 'http://build.wordpress-develop.dev/'; // Replace this with your WP installation url

    this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
    this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
    this.mediaEndPoint = `${appUrl}/wp-json/wp/v2/media`; // Endpoint for getting Wordpress Media
    this.taxonomiesEndPoint = `${appUrl}/wp-json/wp/v2/taxonomies`; // Endpoint for getting Wordpress Taxonomies
    this.categoriesEndPoint = `${appUrl}/wp-json/wp/v2/categories`; // Endpoint for getting Wordpress Categories
    this.tagsEndPoint = `${appUrl}/wp-json/wp/v2/tags`; // Endpoint for getting Wordpress Tags
    this.commentsEndPoint = `${appUrl}/wp-json/wp/v2/comments`; // Endpoint for getting Wordpress Tags
    // this.settingsEndPoint = `${appUrl}/wp-json/wp/v2/settings`; // Endpoint for getting Wordpress Settings
  }

  // Method for getting data from the provided end point url
  api(endPoint) {
    return new Promise((resolve, reject) => {
      axios.get(endPoint).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  // Method for getting Pages data
  getPages(cb){
    this.api(this.pagesEndPoint).then((response) => {
      this.getPosts(response, cb);
    });
  }

  // Method for getting Posts data
  getPosts(pages, cb){
    this.api(this.postsEndPoint).then((response) => {
      const posts = response;
      const payload = { pages, posts };

      this.getSuccess(payload); // Pass returned data to the store
      cb(payload); // This callback will be used for dynamic rout building
    });
  }

  getMedia(cb){
    this.api(this.mediaEndPoint).then((response) => {
      this.getPosts(response, cb);
    });
  }

  getCategories(cb){
    this.api(this.categoriesEndPoint).then((response) => {
      this.getPosts(response, cb);
    });
  }

  getComments(cb){
    this.api(this.commentsEndPoint).then((response) => {
      this.getPosts(response, cb);
    });
  }

  // This returnes an object with Pages and Posts data together
  // The Alt Store will listen for this method to fire and will store the returned data
  getSuccess(payload){
    return payload;
  }
}

export default alt.createActions(DataActions);
