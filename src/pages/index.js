import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

const IndexPage = () => {
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
    <div className={isPreloaded ? "main-body is-preload" : "main-body"}>
      <SEO title="Home" keywords={["blog", "developement"]} />
      <h1>Main</h1>
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
  );
};

export default IndexPage;
