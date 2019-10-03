import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            blogTitle
            heading
            subHeading
            social {
              github
            }
          }
        }
      }
    `
  );

  return data.site.siteMetadata;
};

export default useSiteMetadata;
