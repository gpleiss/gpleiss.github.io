import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
    </Route>
  </Router>
);

export default routes;

