import routes from './routes';

import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import * as Routes from 'constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          {Object.values(routes).map((route) => (
            <Route key={route.label} path={route.path} exact component={route.component} />
          ))}
          <Route path="*">
            <Redirect to={Routes.HOME} />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
