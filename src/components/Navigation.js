var React = require('react');

import {
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router
} from 'react-router';

function Navigation() {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={ App } >
        <IndexRoute component={ Home } />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  )
}
module.exports = Navigation;