import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyles from "./GlobalStyles";

import Sidebar from "./sidebar";
import Footer from "./footer";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div id="wrapper">
        <Sidebar />
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
