import React from "react";
import PropTypes from "prop-types";

const TopNav = ({ onMenuClick = () => {} }) => {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuClick();
            }}
          >
            Menu
          </a>
        </li>
      </ul>
    </nav>
  );
};

TopNav.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default TopNav;
