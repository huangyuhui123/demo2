import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  const pagedata={
      case: ["list", "item", "design"]
  }

  return (
    <Router history={history}>
        <Route path="/" exact component={IndexPage} />
        <Router path="/case">
          {pagedata["case"].map(func => (
            <Router
              key={func}
              path={func + "/:id"}
              component={require("./pages/case/" + func)}
            />
          ))}
        </Router>
    </Router>
  );
}

export default RouterConfig;
