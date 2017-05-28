import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/home/Home';
import views from './components/views';
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
      const component = views[page.slug];
      return (
        <Route
          getComponent={(nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require(component).default);
            });
          }}
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
