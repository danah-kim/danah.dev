import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'intersection-observer';

import App from './App';
import GlobalStyles from './GlobalStyles';
import * as serviceWorker from './serviceWorker';

import { isFunction, isObject } from 'lib/helpers';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import './font.css';
import 'normalize.css';

function disableReactDevTools() {
  if (!isObject((window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
    return;
  }

  for (const prop in (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = isFunction(
      typeof (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__[prop]
    )
      ? Function.prototype
      : null;
  }
}

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
