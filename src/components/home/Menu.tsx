import Analytics from 'lib/analytics';
import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ACTION, CATEGORY, LABEL } from 'constants/ga';

const MenuContainer = styled.div`
  :after {
    content: ' ';
    display: block;
    height: 35px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.li`
  color: ${(props) => props.theme.colors.main};
  font-weight: 700;
  opacity: 0.8;
  transition: 0.5s all;

  :not(:first-child) {
    margin-left: 10px;
  }
  :hover {
    color: ${(props) => props.theme.colors.grey};
  }
`;

function Menu() {
  const handleGa = useCallback(
    (label: string) => () => {
      Analytics.event({
        eventCategory: CATEGORY.about,
        eventAction: ACTION.menu,
        eventLabel: label,
      });
    },
    []
  );

  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>
          <Link to="/about" onClick={handleGa(LABEL.home.about)}>
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sweetmilkys"
            onClick={handleGa(LABEL.home.github)}
          >
            Github
          </a>
        </MenuItem>
        <MenuItem>
          <Link to="/email" onClick={handleGa(LABEL.home.email)}>
            Email
          </Link>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
}

export default memo(Menu);
