import React, { useState } from "react";

import Nav from "./nav";
import NavBtn from "./navBtn";
//import { Link } from "gatsby";
//import logo from "../assets/img/logo.png";

const SideBar = () => {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header">
        <div className="inner">
          {/* <Link to="/" className="logo">
            <span className="symbol">
              <img src={logo} alt="" />
            </span>
            <span className="title">Danah.dev</span>
          </Link> */}
          <NavBtn onMenuClick={() => toggleHeader(!headerOpen)} />
        </div>
      </header>
      <div className={`${headerOpen ? "is-menu-visible" : " "}`}>
        <Nav onClose={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
};

export default SideBar;
