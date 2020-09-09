import SideMenuDrawer from './SideMenuDrawer';

import React, { memo, ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import { sideMenuState } from 'store/common';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 40px auto 0;
  overflow: hidden;
  ${(props) => props.theme.media.small} {
    margin: 20px auto 0;
  }
`;

const CloseStyle = css`
  span:nth-of-type(1) {
    transform: translateY(6px) rotateZ(-135deg);
    background-color: ${({ theme }) => theme.colors.white};
  }
  span:nth-of-type(2) {
    opacity: 0;
  }
  span:nth-of-type(3) {
    transform: translateY(-6px) rotateZ(135deg);
    background-color: ${({ theme }) => theme.colors.white};
  }

  :hover {
    span {
      transition: all 0.3s;
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

const MenuButton = styled.button<{ open: boolean }>`
  position: absolute;
  top: 2.7vmin;
  left: 2.8vmin;
  padding: 10px;
  z-index: 300;
  outline: none;
  width: 43px;
  cursor: pointer;

  :hover {
    span {
      transition: all 0.3s;
      background-color: ${({ theme }) => theme.colors.main};
      transform: scaleX(1.1);
    }
  }

  ${({ open }) => open && CloseStyle};
`;

const Line = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 4px;
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s ease-out;
  transform: translateZ(0);
`;

type PageTemplateProps = {
  isMenu?: boolean;
  children: ReactNode;
};

function PageTemplate({ isMenu = false, children }: PageTemplateProps) {
  const [sideMenu, setSideMenu] = useRecoilState(sideMenuState);

  return (
    <>
      <Wrapper>
        {isMenu && (
          <MenuButton
            open={sideMenu}
            onClick={() => {
              setSideMenu(!sideMenu);
            }}
          >
            <Line />
            <Line />
            <Line />
          </MenuButton>
        )}
        {children}
      </Wrapper>
      {isMenu && <SideMenuDrawer />}
    </>
  );
}

export default memo(PageTemplate);
