import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

import SEO from "../components/seo";
import GlobalStyles from "../components/GlobalStyles";
import theme from "../theme";
import profile from "../assets/images/profile.png";

const IndexContainer = styled.div`
  min-height: 100vh;
  background: url(${props => props.bgUrl}) center center no-repeat fixed;
  background-size: cover;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBox = styled.div`
  text-align: center;
  position: relative;
  margin: auto;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
  box-shadow: 0 0.1rem 0.2rem 0.01rem rgba(0, 0, 0, 0.35);
  @media only screen and (max-width: 640px) {
    height: auto;
    width: auto;
    padding: 0.3rem;
  }
`;

const Card = styled.div`
  margin: 0 auto;
  max-width: 500px;
  transition: all 1s ease;
`;

const Profile = styled.div``;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 35px 0;
  padding: 2px;
  border-radius: 50%;
  transition: 1s all;
  :hover {
    transform: scale(1.2);
  }
`;

const NameBox = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: center;
`;

const Name = styled.span`
  margin-right: 8px;
  font-weight: 700;
`;

const NickName = styled.span`
  display: inline-block;
  font-size: 18px;
  padding: 6px 10px;
  font-weight: bolder;
  letter-spacing: 0.5px;
  border-radius: 12px;
  color: ${theme.nickNameCcolor};
  background-color: ${theme.mainColor};
  opacity: 0.8;
  transform-origin: center;
  animation: flutter 2s infinite linear;

  @keyframes flutter {
    0% {
      transform: rotate(0deg);
    }
    35% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(-5deg);
    }
    60% {
      transform: rotate(5deg);
    }
    65% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Introduction = styled.div`
  margin: 40px 0;
  opacity: 0.8;
  :before {
    border-top: 1px solid ${theme.grayColor};
    width: 100%;
    content: " ";
    display: block;
    height: 24px;
    opacity: 0.1;
  }
  :after {
    border-bottom: 1px solid ${theme.grayColor};
    width: 100%;
    content: " ";
    display: block;
    height: 24px;
    opacity: 0.1;
  }
`;

const Menu = styled.div`
  ::after {
    content: " ";
    display: block;
    height: 35px;
  }
`;

const List = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
  color: ${theme.mainColor};
  font-weight: 700;
  opacity: 0.8;
  transition: 0.5s all;
  :not(:first-child) {
    margin-left: 10px;
  }
  :hover {
    color: ${theme.grayColor};
  }
`;

const Footer = styled.footer`
  position: relative;
  bottom: 15px;
  a {
    color: ${theme.blackColor};
  }
`;

const IndexPage = () => {
  const {
    site: {
      siteMetadata: {
        author,
        social: { github },
        heading,
        subHeading
      }
    }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
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

  const [isPreloaded, setIsPreloaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaded(false);
    }, 100);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return (
    <IndexContainer
      className={isPreloaded ? "main-body is-preload" : "main-body"}
      bgUrl={require("../assets/images/bg.jpg")}
    >
      <SEO title="Home" keywords={["blog", "developement"]} />
      <GlobalStyles />
      <CardBox>
        <Card>
          <Profile>
            <ProfileImage src={profile} alt="avatar" />
            <NameBox>
              <Name>{heading}</Name>
              <NickName>@{author}</NickName>
            </NameBox>
            <Introduction>
              <p>{subHeading}</p>
            </Introduction>
          </Profile>
          <Menu>
            <List>
              <Item>
                <Link to="/about">About</Link>
              </Item>
              <Item>
                <Link to="/blog">Blog</Link>
              </Item>
              {github && (
                <Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://github.com/${github}`}
                  >
                    Github
                  </a>
                </Item>
              )}
              <Item>
                <Link to="/email">Email</Link>
              </Item>
            </List>
          </Menu>
        </Card>
      </CardBox>
      <Footer>
        &copy;<a href="https://github.com/sweetmilkys">Danah</a>, Built with{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sweetmilkys/gatsby-starter-sweet-blog"
        >
          Gatsby-starter-sweet-blog
        </a>
      </Footer>
    </IndexContainer>
  );
};

export default IndexPage;
