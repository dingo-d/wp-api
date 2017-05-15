var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var Home = require('./components/Home');
require('./sass/application.scss');

import {
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router
} from 'react-router';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={ App } >
        <IndexRoute component={ Home } />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  ), document.getElementById('app')
);