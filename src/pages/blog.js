/* eslint-disable react/prop-types */
import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="blog" />
      <div>
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.frontmatter.path}>
              <div>{node.frontmatter.title} </div>
              <div>
                <div>
                  {node.frontmatter.date} - {node.fields.readingTime.text}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          fields {
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
