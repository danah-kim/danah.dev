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
    font-family: Nunito, Helvetica, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.grey};
    background-color: ${(props) => props.theme.colors.background};
    user-select: none;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    :link {
      text-decoration: none;
    }
    :visited {
      text-decoration: none;
    }
  }
  ol, li, ul {
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
  h1 {
    font-size: 3.5em;
    font-weight: 700;
    ${(props) => props.theme.media.small} {
      font-size: 3em;
    }
  }
  h2 {
    font-size: 3em;
    font-weight: 600;
    ${(props) => props.theme.media.small} {
      font-size: 2.5em;
    }
  }
  h3 {
    font-size: 2.5em;
    font-weight: 400;
    ${(props) => props.theme.media.small} {
      font-size: 2em;
    }
  }
  h4 {
    font-size: 2em;
    font-weight: 400;
    ${(props) => props.theme.media.small} {
      font-size: 1.5em;
    }
  }
  h5 {
    font-size: 1.5em;
    font-weight: normal;
    ${(props) => props.theme.media.small} {
      font-size: 1em;
    }
  }
  ::selection {
    background: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
  }
`;

export default globalStyles;
