import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, :after, :before {
    box-sizing: inherit;
  }
  body {
    margin:0;
    padding:0;
    color: ${props => props.theme.grayColor};
    background: hsla(0, 0%, 95.7%, 0.8);
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
      color: ${props => props.theme.mainColor};
    }
    :hover {
      transition: 0.5s all;
      color: ${props => props.theme.mainColor};
    }
  }
  .is-preload {
    transition: none !important;
    transform: scale(.9);
    opacity: 0;
    animation: none !important;
  }
  .gatsby-highlight {
    border-radius: .3em;
    padding: 1em 0;
    margin: .5em 0;
    overflow: auto;
  }
`;

export default GlobalStyle;