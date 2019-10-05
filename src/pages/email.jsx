import React from "react";
import propTypes from "prop-types";

import Layout from "components/layout";
import SEO from "components/seo";

const Email = ({ path }) => (
  <Layout path={path}>
    <SEO title="Email" />
    <h1>Email</h1>
  </Layout>
);

Email.propTypes = {
  path: propTypes.string
};

export default Email;
