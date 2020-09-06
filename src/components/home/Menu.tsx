import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sweetmilkys">
            Github
          </a>
        </MenuItem>
        <MenuItem>
          <Link to="/email">Email</Link>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
}

export default memo(Menu);
