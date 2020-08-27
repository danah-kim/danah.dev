import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};
  body {
    margin: 0;
    padding: 0;
    font-family: Nunito, Avenir, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: inherit;
  }
  input, button, textarea {
    font-family: inherit;
  }
  html, body, #root {
    height: 100%;
  }
`;

export default globalStyles;
