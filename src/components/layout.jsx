import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyles from "./GlobalStyles";

import Sidebar from "./sidebar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        social: { github },
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              github
            }
          }
        }
      }
    `
  );
  console.log(children);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div id="wrapper">
        <Sidebar github={github} />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
