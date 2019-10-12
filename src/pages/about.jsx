/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import propTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

import Layout from "components/layout";
import SEO from "components/seo";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto"
  },
  imgGrid: {
    "text-align": "center"
  },
  ButtonBase: {
    border: "none !important",
    background: "transparent"
  },
  img: {
    margin: "auto",
    display: "block",
    "border-radius": "0.25rem",
    width: "100vh"
  }
}));

const About = ({ data, path }) => {
  console.log(data);
  const classes = useStyles();

  return (
    <Layout path={path}>
      <SEO title="About" />
      <Paper className={classes.paper}>
        <Grid container spacing={4} justify="center" alignItems="center">
          <Grid className={classes.imgGrid} item xs={12} md={3}>
            <ButtonBase className={classes.ButtonBase}>
              <Img
                className={classes.img}
                fixed={data.profileImage.childImageSharp.fixed}
                alt="profile"
              />
            </ButtonBase>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            zeroMinWidth
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div data-language="js">
              <pre className="language-js" style={{ margin: 0 }}>
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
            </div>
          </Grid>
        </Grid>
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
