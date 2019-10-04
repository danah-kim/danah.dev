import React, { useState, useEffect, useRef } from "react";
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

const Header = styled.header`
  display: flex;
  font-size: 2em;
  overflow: hidden;
  padding: 5vh 0;
  justify-content: center;
`;

const BlogTitle = styled.h2``;

const MenuBtn = styled.i`
  position: absolute;
  right: 5vh;
  transition: 0.5s all;
  :hover {
    color: ${props => props.theme.mainColor};
  }
`;

const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
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
  transform: translateX(0);
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

const CloseBtn = styled.i`
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
  const [headerOpen, toggleHeader] = useState(false);
  const sidebarRef = useRef();

  const handleMenu = e => {
    if (sidebarRef.current && sidebarRef.current === e.target) {
      toggleHeader(prev => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleMenu);
  }, []);

  return (
    <>
      <Header>
        <BlogTitle>{title}</BlogTitle>
        <MenuBtn onClick={() => toggleHeader(!headerOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </MenuBtn>
      </Header>
      <NavContainer ref={sidebarRef} isVisible={headerOpen}>
        <NavBox isVisible={headerOpen}>
          <Nav isVisible={headerOpen}>
            <Title>Menu</Title>
            <ul>
              <Item>
                <Link to="/" activeClassName={"isActive"}>
                  <FontAwesomeIcon icon={faHome} />
                  Home
                </Link>
              </Item>
              <Item>
                <Link to="/about" activeClassName={"isActive"}>
                  <FontAwesomeIcon icon={faUser} />
                  About
                </Link>
              </Item>
              <Item>
                <Link to="/blog" activeClassName={"isActive"}>
                  <FontAwesomeIcon icon={faBook} />
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
                      <FontAwesomeIcon icon={faGithub} />
                      Github
                    </a>
                  </Item>
                  <Item>
                    <Link to="/email" activeClassName={"isActive"}>
                      <FontAwesomeIcon icon={faEnvelope} />
                      Email
                    </Link>
                  </Item>
                </>
              )}
            </ul>
          </Nav>
          <CloseBtn
            isVisible={headerOpen}
            onClick={() => toggleHeader(!headerOpen)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </CloseBtn>
        </NavBox>
      </NavContainer>
    </>
  );
};

SideBar.propTypes = {
  title: propTypes.string.isRequired,
  github: propTypes.string
};

export default SideBar;

// Todo
// mobile size
