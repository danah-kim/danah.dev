/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from "components/globalStyle";
import SiteMetadata from "util/siteMetadata";
import Sidebar from "./sidebar";
import Footer from "./footer";

const Contents = styled.div`
  padding: 0 16px;
  max-width: 1012px;
  margin: 0 auto;
  transition: opacity 1.5s ease;
`;

const Layout = data => {
  const {
    social: { github }
  } = SiteMetadata();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Sidebar path={data.path} github={github} />
      <Contents>{data.children}</Contents>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Layout;
