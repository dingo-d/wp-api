import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/home/Home';
import DataActions  from './actions/DataActions.js';

require('./sass/application.scss');

import {
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router
} from 'react-router';

class InitializeApp {

  buildRoutes(data) {
    return data.pages.map((page, i) => {
      return (
        <Route
          component={ Home }
          key={ page.id }
          path={`/${page.slug}`}
        />
      );
    });
  }

  run() {
    DataActions.getPages((response) => {
      ReactDOM.render(
        <Router history={browserHistory}>
          <Route path="/" component={ App } >
            <IndexRoute component={ Home } />
            {this.buildRoutes(response)}
          </Route>
          <Redirect from="*" to="/" />
        </Router>
        , document.getElementById('app')
      );
    });
  }
}

new InitializeApp().run();
