import Portal from './Potal';

import anime from 'animejs';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { sideMenuState } from 'store';
import styled from 'styled-components';

import { MENU } from 'constants/constant';

const NavContainer = styled.div<{ open: boolean }>`
  width: ${({ open }) => (open ? '100%' : '0')};
  height: ${({ open }) => (open ? '100%' : '0')};
  top: 0;
  position: fixed;
  z-index: 200;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: visibility 0.5s;
`;

const Dim = styled.div`
  background: #333;
  opacity: 0.6;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const NavBox = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;
  max-width: 80%;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  cursor: default;
  transform: ${({ open }) => `translateX(${open ? '0' : '-22em'})`};
  transition: transform 0.5s ease;
`;

const Nav = styled.div`
  height: 100%;
  margin: 18vh auto 0;
  overflow-y: auto;
  opacity: 0;
`;

const NavHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: bold;
  position: relative;
  display: flex;
  justify-content: center;

  span {
    padding: 0 10px;
    background: ${({ theme }) => theme.colors.main};
  }
  div {
    display: block;
    height: 2px;
    width: 100%;
    z-index: -1;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: 4px;
    transform: scaleX(0.35);
  }
`;

const NavCategories = styled.ul`
  padding: 20px 0 20px;
  list-style-type: none;
  overflow: hidden;
  margin: 0 auto;
  transform: translateZ(0);
  font-family: Inter, Helvetica Neue, Arial, sans-serif;

  :hover {
    color: inherit;
  }
`;

const NavCategory = styled.li`
  transform: translateY(0px) scale(1);
  padding: 0;
  text-align: center;

  a {
    display: inline-block;
    color: inherit;
    padding: 27px 20px 30px;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: color 0.25s ease-in-out;
    transform: translateZ(0);

    ::after {
      content: '';
      background-color: #fff;
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scaleY(0);
      transform-origin: 0 100%;
      transition: all 0.25s ease-in-out;
      z-index: -1;
    }
  }

  :hover {
    color: inherit;

    a {
      color: ${({ theme }) => theme.colors.main};

      ::after {
        transform: scaleY(1);
      }
    }
  }
`;

const Line = styled.div`
  transform: scaleX(0.8);
  display: block;
  height: 2px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  position: absolute;
`;

type SideMenuDrawerProps = {
  handleGa: (label: string) => () => void;
};

const SideMenuDrawer = (props: SideMenuDrawerProps) => {
  const { handleGa } = props;
  const [sideMenu, setSideMenu] = useRecoilState(sideMenuState);
  const navRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLUListElement>(null);

  const onClose = useCallback(() => {
    setSideMenu(false);
  }, [setSideMenu]);

  const onClickMenu = useCallback(
    (label: string) => () => {
      handleGa(label);
      onClose();
    },
    [handleGa, onClose]
  );

  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (sideMenu && e.code === 'Escape') {
        onClose();
      }
    },
    [onClose, sideMenu]
  );

  useEffect(() => {
    return () => {
      onClose();
    };
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onKeydown]);

  useEffect(() => {
    if (navRef.current && categoriesRef.current) {
      if (sideMenu) {
        anime({
          targets: navRef.current,
          opacity: [0, 1],
          delay: 150,
          easing: 'easeInOutExpo',
          duration: 400,
        });
        anime({
          targets: '.nav-header-line',
          scaleX: [0.35, 0.8],
          delay: 250,
          easing: 'easeInOutExpo',
          duration: 600,
        });
        anime({
          targets: categoriesRef.current.children,
          translateY: ['-7px', 0],
          scale: [0.9, 1],
          opacity: [0, 1],
          delay: (el, i) => 700 + 90 * (i + 1),
          duration: 1100,
          easing: 'easeOutExpo',
        });
      } else {
        anime({
          targets: navRef.current,
          opacity: [1, 0],
          easing: 'easeInOutExpo',
          duration: 500,
        });
      }
    }
  }, [sideMenu]);

  return (
    <Portal>
      <NavContainer id="sidebar" open={sideMenu}>
        {sideMenu && <Dim onClick={onClose} />}
        <NavBox open={sideMenu}>
          {sideMenu && (
            <Nav ref={navRef}>
              <NavHeader>
                <span>Danah Kim</span>
                <div className="nav-header-line" />
              </NavHeader>
              <NavCategories ref={categoriesRef}>
                {Object.values(MENU).map(({ name, to, label }) => (
                  <NavCategory key={name}>
                    <Link to={to} onClick={onClickMenu(label)}>
                      {name}
                    </Link>
                  </NavCategory>
                ))}
              </NavCategories>
              <Line />
            </Nav>
          )}
        </NavBox>
      </NavContainer>
    </Portal>
  );
};

export default memo(SideMenuDrawer);
