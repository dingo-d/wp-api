import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/home/Home';
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