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

const Layout = ({ children }) => {
  const {
    social: { github }
  } = useSiteMetadata();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Sidebar
        title={children[0] ? children[0].props.title : null}
        github={github}
      />
      <Contents>{children}</Contents>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
