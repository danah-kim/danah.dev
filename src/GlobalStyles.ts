import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Nunito, Avenir, Helvetica, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.grey};
    background-color: ${(props) => props.theme.colors.background};
  }
   html, body, #root {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  ol, li, i {
    list-style: none;
    .isActive {
      color:${(props) => props.theme.colors.main};
    }
    :hover {
      transition: 0.5s all;
      color:${(props) => props.theme.colors.main};
    }
  }
  input, button, textarea {
    font-family: inherit;
    border: none;
    outline: none;
    background-color: transparent;
  }
  img {
  width: 100%;
  height: 100%;
  }
`;

export default globalStyles;
