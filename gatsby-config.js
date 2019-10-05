require("dotenv").config();
const metaConfig = require("./contents/meta/config.js");

module.exports = {
  siteMetadata: metaConfig,
  plugins: [
    "gatsby-plugin-resolve-src",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/contents/posts`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`
      }
    },

    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-reading-time", "gatsby-remark-prismjs"]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: metaConfig.manifestName,
        short_name: metaConfig.manifestShortName,
        start_url: metaConfig.pathPrefix || metaConfig.manifestStartUrl,
        background_color: metaConfig.manifestBackgroundColor,
        theme_color: metaConfig.manifestThemeColor,
        display: metaConfig.manifestDisplay,
        icon: metaConfig.manifestIcon
      }
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": ["Strict-Transport-Security: max-age=63072000"]
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true // boolean to turn off automatic creation of redirect rules for client only paths
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GA_TRACKING_ID
          ? process.env.GA_TRACKING_ID
          : ""
      }
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    }
  ]
};
