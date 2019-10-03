import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "theme";

const globalStyles = createGlobalStyle`
  ${reset};
  *, :after, :before {
    box-sizing: inherit;
  }
  body {
    margin:0;
    padding:0;
    color: ${theme.grayColor};
    font: 112.5%/1.45em;
    font-family: 'Nunito', 'Avenir', 'Helvetica', 'sans-serif';
  }
  h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li, i {
    .isActive {
      color: ${theme.mainColor};
    }
    :hover {
      transition: 0.5s all;
      color: ${theme.mainColor};
    }
  }
  .is-preload {
    transition: none !important;
    transform: scale(.9);
    opacity: 0;
    animation: none !important;
  }
`;

export default globalStyles;
