import anime from 'animejs';
import CardTemplate from 'components/CardTemplate';
import Hexagons from 'components/Hexagons';
import React, { memo, useCallback, useContext, useEffect, useRef } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { SKILLS } from 'constants/constant';

const SkillsContainer = styled.div`
  width: 100%;
  padding: 50px 40px 40px;

  .center {
    margin: 0 auto;
    max-width: 440px;
  }
`;

const SkillsBox = styled.div`
  margin-top: 40px;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  ${(props) => props.theme.media.customMax(1252)} {
    margin-right: 0;
  }
`;

const SkillsItem = styled.div`
  :nth-of-type(1) {
    ${(props) => props.theme.media.customMax(711)} {
      ul {
        padding-left: 40px;
      }
    }
    ${(props) => props.theme.media.small} {
      ul {
        padding-left: 0;
      }
    }
  }
  :nth-of-type(2) {
    padding: 0 20px;
    ${(props) => props.theme.media.customMax(711)} {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  :nth-of-type(3) {
    ${(props) => props.theme.media.customMax(1252)} {
      h3 {
        padding-right: 40px;
      }
      ul {
        padding-right: 40px;
      }
    }
  }
  ${(props) => props.theme.media.customMax(711)} {
    h3 {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  ${(props) => props.theme.media.small} {
    h3 {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

const SubTitle = styled.h3`
  padding-bottom: 20px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  ${(props) => props.theme.media.small} {
    font-size: 1.5em;
  }
`;

function Skills() {
  const { colors } = useContext(ThemeContext);
  const element = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      anime({
        targets: '.hexagon',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 550,
        delay: (el, i) => 50 * (i + 1),
      });
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, {
        rootMargin: '0px',
        threshold: 0.3,
      });
      observer.observe(element.current);
    }

    return () => observer?.disconnect();
  }, [onScroll]);

  return (
    <CardTemplate title="Tech Skills" color={colors.board}>
      <SkillsContainer ref={element}>
        <SkillsItem className="center">
          <SubTitle>Occupational</SubTitle>
          <Hexagons
            type="flex"
            data={Object.entries(SKILLS.occupational).map(([key, value]) => ({ id: key, ...value }))}
            disableLabel
          />
        </SkillsItem>
        <SkillsBox>
          {[
            {
              text: 'Favour',
              data: [
                ...Object.entries(SKILLS.frontEnd).map(([key, value]) => ({ id: key, ...value })),
                ...Object.entries(SKILLS.backEnd).map(([key, value]) => ({ id: key, ...value })),
              ],
            },
            {
              text: 'Tools',
              data: Object.entries(SKILLS.tools).map(([key, value]) => ({ id: key, ...value })),
            },
            {
              text: 'Etc',
              data: Object.entries(SKILLS.etc).map(([key, value]) => ({ id: key, ...value })),
            },
          ].map(({ text, data }) => (
            <SkillsItem key={text} className="gridSkills">
              <SubTitle>{text}</SubTitle>
              <Hexagons type="grid" data={data} disableLabel small />
            </SkillsItem>
          ))}
        </SkillsBox>
      </SkillsContainer>
    </CardTemplate>
  );
}

export default memo(Skills);
