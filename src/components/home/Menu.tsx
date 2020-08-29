import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuBox = styled.div`
  :after {
    content: ' ';
    display: block;
    height: 35px;
  }
`;

const List = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const Item = styled.li`
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
    <MenuBox>
      <List>
        <Item>
          <Link to="/about">About</Link>
        </Item>
        <Item>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sweetmilkys">
            Github
          </a>
        </Item>
        <Item>
          <Link to="/email">Email</Link>
        </Item>
      </List>
    </MenuBox>
  );
}

export default Menu;
