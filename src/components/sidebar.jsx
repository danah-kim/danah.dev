import React, { useState } from "react";
import propTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Menu = styled.div`
  text-align: right;
  font-size: 2em;
  overflow: hidden;
  padding: 5vh 5vh 0 0;
`;

const MenuBtn = styled.i`
  transition: 0.5s all;
  :hover {
    color: ${props => props.theme.mainColor};
  }
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

const SideBar = ({ github }) => {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header>
        <Menu>
          <MenuBtn onClick={() => toggleHeader(!headerOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </MenuBtn>
        </Menu>
      </header>
      <NavBox isVisible={headerOpen}>
        <Nav isVisible={headerOpen}>
          <Title>Menu</Title>
          <ul>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to="/about">About</Link>
            </Item>
            <Item>
              <Link to="/blog">Blog</Link>
            </Item>
            <Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${github}`}
              >
                Github
              </a>
            </Item>
            <Item>
              <Link to="/email">Email</Link>
            </Item>
          </ul>
        </Nav>
        <CloseBtn
          isVisible={headerOpen}
          onClick={() => toggleHeader(!headerOpen)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </CloseBtn>
      </NavBox>
    </>
  );
};

SideBar.propTypes = {
  github: propTypes.string,
};

export default SideBar;

// Todo
// mobile size
