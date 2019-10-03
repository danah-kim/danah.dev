import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyles from "./GlobalStyles";

import Sidebar from "./sidebar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        blogTitle,
        social: { github }
      }
    }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            blogTitle
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
        <Sidebar title={blogTitle} github={github} />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
