var React = require('react');
var RenderDOM = require('react-dom');
var App = require('./components/App');
var Home = require('./components/Home');
require('./sass/application.scss');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);