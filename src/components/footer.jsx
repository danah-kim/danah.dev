import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  margin: 20px 0;
  text-align: center;
  a {
    color: ${props => props.theme.blackColor};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy;<a href="https://github.com/sweetmilkys">Danah</a>, Built with{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/sweetmilkys/gatsby-starter-sweet-blog"
      >
        Gatsby-starter-sweet-blog
      </a>
    </FooterContainer>
  );
};

export default Footer;
