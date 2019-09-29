import React from "react";
import PropTypes from "prop-types";

import Sidebar from "./sidebar";
import Footer from "./footer";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
