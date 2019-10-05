import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyles from "./GlobalStyles";

import useSiteMetadata from "hooks/useSiteMetadata";
import Sidebar from "./sidebar";
import Footer from "./footer";

const Contents = styled.div`
  padding: 0 16px;
  max-width: 1012px;
  margin: 0 auto;
  transition: opacity 1.5s ease;
`;

const Layout = ({ path, children }) => {
  const {
    social: { github }
  } = useSiteMetadata();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Sidebar path={path} github={github} />
      <Contents>{children}</Contents>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Layout;
