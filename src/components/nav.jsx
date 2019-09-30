import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Nav = ({ onClose = () => {} }) => {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sweetmilkys"
            >
              Github
            </a>
          </li>
          <li>
            <Link to="/email">Email</Link>
          </li>
        </ul>
      </div>
      <a
        className="close"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
        href="#menu"
      >
        Close
      </a>
    </nav>
  );
};

Nav.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Nav;
