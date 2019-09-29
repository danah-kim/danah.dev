const config = require("./config");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.description,
    author: config.author,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "marksdown-pages",
        path: `${__dirname}/src/posts/TIL`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "marksdown-pages",
        path: `${__dirname}/src/posts/HTML`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "marksdown-pages",
        path: `${__dirname}/src/posts/CSS`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "marksdown-pages",
        path: `${__dirname}/src/posts/JavaScript`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "marksdown-pages",
        path: `${__dirname}/src/posts/React`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "marksdown-pages",
        path: `${__dirname}/src/posts/DataStructuresAlgorithms`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-reading-time",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              aliases: { sh: "bash", js: "javascript" },
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": ["Strict-Transport-Security: max-age=63072000"],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
};
