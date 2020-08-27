import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './App';
import * as serviceWorker from './serviceWorker';

import palette from 'lib/styles/palette';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ palette }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
