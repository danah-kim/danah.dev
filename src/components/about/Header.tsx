import anime from 'animejs';
import React, { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.h1`
  text-align: center;
  margin-bottom: 100px;

  ${(props) => props.theme.media.small} {
    margin-bottom: 50px;
  }
`;

const HeaderBox = styled.span`
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
`;

const TextBox = styled.span`
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;

  .letter {
    display: inline-block;
    line-height: 1em;
  }
`;

const Text = styled.span`
  display: inline-block;
  line-height: 1em;
`;

const Line = styled.span`
  opacity: 0;
  position: absolute;
  left: 0;
  height: 3px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey};
  transform-origin: 0 0;
  bottom: 0;
`;

function Header() {
  const text = useRef<HTMLSpanElement | null>(null);
  const line = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (text.current?.textContent) {
      text.current.innerHTML = text.current.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime
        .timeline({ loop: true })
        .add({
          targets: text.current.children,
          translateY: ['1.1em', 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 100 * i,
        })
        .add({
          targets: text.current,
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
        });

      anime
        .timeline({ loop: true })
        .add({
          targets: line.current,
          scaleX: [0, 1],
          opacity: [0.2, 0.8],
          easing: 'easeOutExpo',
          duration: 1250,
          delay: 100,
        })
        .add({
          targets: line.current,
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
        });
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderBox>
        <TextBox>
          <Text ref={text}>Hello :D</Text>
        </TextBox>
        <Line ref={line} />
      </HeaderBox>
    </HeaderContainer>
  );
}

export default memo(Header);
