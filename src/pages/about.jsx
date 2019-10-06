/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import propTypes from "prop-types";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

import Layout from "components/layout";
import SEO from "components/seo";

const GridContainer = styled(Grid)`
  align-items: center;
  justify-content: center;
`;

const ImageBox = styled(ButtonBase)`
  max-width: 235px;
  img {
    margin: auto;
    display: block;
    border-radius: 0.25rem;
  }
`;

const CodeGrid = styled(Grid)`
  @media only screen and (max-width: 995px) {
    width: 100%;
    max-width: 100% !important;
    flex-basis: 100% !important;
  }
`;

const Code = styled.div``;

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto"
  }
}));

const About = ({ data, path }) => {
  const classes = useStyles();

  return (
    <Layout path={path}>
      <SEO title="About" />
      <Paper className={classes.paper}>
        <GridContainer container spacing={4}>
          <Grid item>
            <ImageBox>
              <Img
                fixed={data.profileImage.childImageSharp.fixed}
                alt="profile"
              />
            </ImageBox>
          </Grid>
          <CodeGrid
            item
            xs={8}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <Code className="gatsby-highlight" data-language="js">
              <pre className="language-js">
                <code className="language-js">
                  <span className="token keyword">const</span>
                  <span className="token variable">{" aboutMe "}</span>
                  <span className="token operator">= </span>
                  <span className="token punctuation">{"{ "}</span>
                  <br />
                  <span className="token variable">{"  name"}</span>
                  <span className="token punctuation">: </span>
                  <span className="token string">{"\"danah kim\""}</span>
                  <span className="token punctuation">,</span>
                  <br />
                  <span className="token variable">{"  email"}</span>
                  <span className="token punctuation">: </span>
                  <span className="token string">
                    {"\"sweetmilky.dev@gmail.com\""}
                  </span>
                  <span className="token punctuation">,</span>
                  <br />
                  <span className="token variable">{"  github"}</span>
                  <span className="token punctuation">: </span>
                  <span className="token string">
                    {"\"github.com/sweetmilkys\""}
                  </span>
                  <span className="token punctuation">,</span>
                  <br />
                  <span className="token punctuation"></span>
                  <span className="token variable">{"  blog"}</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">{"\"danah.dev/blog\""}</span>
                  <br />
                  <span className="token punctuation">{"};"}</span>
                </code>
              </pre>
            </Code>
          </CodeGrid>
        </GridContainer>
      </Paper>
    </Layout>
  );
};

About.propTypes = {
  path: propTypes.string
};

export default About;

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 235, height: 176, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
