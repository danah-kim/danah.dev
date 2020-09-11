import Analytics from './lib/analytics';
import routes from './routes';

import NotFoundPage from 'pages/NotFoundPage';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

Analytics.initialize(process.env.GA_TRACKING_ID || '');

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          {Object.values(routes).map((route) => (
            <Route key={route.label} path={route.path} exact component={route.component} />
          ))}
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
