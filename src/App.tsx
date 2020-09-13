import routes from './routes';

import { init } from 'emailjs-com';
import Analytics from 'lib/analytics';
import NotFoundPage from 'pages/NotFoundPage';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

Analytics.initialize('UA-149399239-1');
init(process.env.REACT_APP_EMAILJS_SERVICE_ID);

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
