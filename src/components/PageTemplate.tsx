import ReactHelmet from './ReactHelmet';
import SideMenuDrawer from './SideMenuDrawer';

import Analytics from 'lib/analytics';
import React, { memo, ReactNode, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { sideMenuState } from 'store';
import styled, { css } from 'styled-components';

import { ACTION, CATEGORY, LABEL } from 'constants/ga';

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
  title: string;
  description: string;
  canonical: string;
  type?: string;
};

function PageTemplate(props: PageTemplateProps) {
  const { isMenu = false, title, description, canonical, type, children } = props;
  const [sideMenu, setSideMenu] = useRecoilState(sideMenuState);

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

  const onClickMenuBtn = useCallback(() => {
    setSideMenu(!sideMenu);
    handleGa(LABEL.about.menu.open);
  }, [handleGa, setSideMenu, sideMenu]);

  return (
    <>
      <ReactHelmet title={title} description={description} canonical={canonical} type={type} />
      <Wrapper>
        {isMenu && (
          <MenuButton open={sideMenu} onClick={onClickMenuBtn}>
            <Line />
            <Line />
            <Line />
          </MenuButton>
        )}
        {children}
      </Wrapper>
      {isMenu && <SideMenuDrawer handleGa={handleGa} />}
    </>
  );
}

export default memo(PageTemplate);
