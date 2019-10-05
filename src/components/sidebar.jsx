import React, { useState } from "react";
import propTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faUser,
  faBook,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const HeaderContainer = styled.header`
  display: flex;
  font-size: 2em;
  overflow: hidden;
  padding: 5vh 0;
  justify-content: center;
  transition: 0.6s all;
`;

const NavOpenBtn = styled.i`
  position: absolute;
  right: 5vh;
  transition: 0.5s all;
  :hover {
    color: ${props => props.theme.mainColor};
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
`;

const NavBox = styled.nav`
  position: fixed;
  display: block;
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  top: 0;
  right: 0;
  height: 100%;
  width: 22em;
  max-width: 80%;
  background: ${props => props.theme.grayColor};
  color: #fff;
  cursor: default;
  transform: ${props =>
    props.isVisible ? "translateX(0)" : "translateX(22em)"};
  transition: transform 0.45s ease, visibility 0.45s,
    -webkit-transform 0.45s ease;
`;

const Nav = styled.div`
  height: 100%;
  padding: 2.75em;
  overflow-y: auto;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 0.45s ease;
`;

const Title = styled.h2`
  font-family: "sans-serif";
  font-size: 1.1em;
  font-weight: 900;
  line-height: 1.5;
  margin: 0 0 2em;
  text-transform: uppercase;
  letter-spacing: 0.35em;
`;

const Item = styled.li`
  padding: 0;
  border-top: 1px solid hsla(0, 0%, 100%, 0.15);
  :first-child {
    border-top: 0;
    margin-top: -1em;
  }
  a {
    display: block;
    padding: 1em 0;
    line-height: 1.5;
  }
  svg {
    margin-right: 10px;
  }
`;

const NavCloseBtn = styled.i`
  color: ${props => props.theme.grayColor};
  font-size: 2em;
  position: absolute;
  top: 1.2em;
  left: -2em;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props =>
    props.isVisible ? "scale(1) rotate(0deg)" : "scale(.25) rotate(180deg)"};
  transition: opacity 0.45s ease, transform 0.45s ease,
    -webkit-transform 0.45s ease;
`;

const SideBar = ({ title, github }) => {
  const [isNavOpen, toggleNav] = useState(false);

  const onClickNavButton = () => toggleNav(!isNavOpen);
  const onClickOutsideNav = e => {
    if (e.target.id === "sidebar") {
      toggleNav(!isNavOpen);
    }
  };

  let pageTitle = "";
  switch (title) {
  case "About":
    pageTitle = "Who I am";
    break;
  case "Blog":
    pageTitle = "Danah's blog";
    break;
  case "Email":
    pageTitle = "Work with me";
    break;
  default:
    pageTitle = "Danah's blog";
    break;
  }

  return (
    <>
      <HeaderContainer>
        <h1
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          {pageTitle}
        </h1>
        <NavOpenBtn onClick={onClickNavButton}>
          <FontAwesomeIcon icon={faBars} />
        </NavOpenBtn>
      </HeaderContainer>
      <NavContainer
        id="sidebar"
        isVisible={isNavOpen}
        onClick={onClickOutsideNav}
      >
        <NavBox isVisible={isNavOpen}>
          <Nav isVisible={isNavOpen}>
            <Title>Menu</Title>
            <ul>
              <Item>
                <Link to="/" activeClassName={"isActive"}>
                  <FontAwesomeIcon icon={faHome} aria-hidden="true" />
                  Home
                </Link>
              </Item>
              <Item>
                <Link to="/about" activeClassName={"isActive"}>
                  <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                  About
                </Link>
              </Item>
              <Item>
                <Link to="/blog" activeClassName={"isActive"}>
                  <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                  Blog
                </Link>
              </Item>
              {github && (
                <>
                  <Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://github.com/${github}`}
                    >
                      <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                      Github
                    </a>
                  </Item>
                  <Item>
                    <Link to="/email" activeClassName={"isActive"}>
                      <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                      Email
                    </Link>
                  </Item>
                </>
              )}
            </ul>
          </Nav>
          <NavCloseBtn isVisible={isNavOpen} onClick={onClickNavButton}>
            <FontAwesomeIcon icon={faTimes} />
          </NavCloseBtn>
        </NavBox>
      </NavContainer>
    </>
  );
};

SideBar.propTypes = {
  title: propTypes.string || null,
  github: propTypes.string
};

export default SideBar;

// Todo
// mobile size
