import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyles from "./GlobalStyles";

import useSiteMetadata from "hooks/useSiteMetadata";
import useIspreloaded from "hooks/useIspreloaded";
import Sidebar from "./sidebar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const {
    blogTitle,
    social: { github }
  } = useSiteMetadata();
  const isPreloaded = useIspreloaded();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Sidebar title={blogTitle} github={github} />
      <div className={isPreloaded ? "is-preload" : null}>{children}</div>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
