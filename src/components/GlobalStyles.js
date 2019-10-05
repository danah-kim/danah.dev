import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "theme";

const GlobalStyles = createGlobalStyle`
  ${reset};
  *, :after, :before {
    box-sizing: inherit;
  }
  body {
    margin:0;
    padding:0;
    color: ${theme.grayColor};
    font-family: "Nunito", "Avenir", "Helvetica", "sans-serif";
  }
  h1 {
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-size: 1.2em;
    font-weight: 700;
    margin: 0;
    @media screen and (max-width: 360px) {
      font-size: 1em;
    }
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
  .gatsby-highlight {
    background-color: "#1d1f21";
    border-radius: .3em;
    margin: .5em 0;
    padding: 1em;
    overflow: auto;
  }
`;

export default GlobalStyles;
