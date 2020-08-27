import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './App';
import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
