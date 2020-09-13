import anime from 'animejs';
import Card from 'components/about/Card';
import Project from 'components/about/Project';
import React, { Fragment, memo, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { AngleRight } from 'static/svgs';
import { sideMenuState } from 'store';
import styled, { ThemeContext } from 'styled-components';

import { EXPERIENCE, ProjectType } from 'constants/constant';

const ExperienceContainer = styled.div`
  width: 100%;
  padding: 50px 40px 40px 40px;

  ${(props) => props.theme.media.small} {
    padding: 50px 20px 20px 20px;
  }
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 15px;
  ${(props) => props.theme.media.small} {
    font-size: inherit;
  }
`;

const ExperienceList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  :hover {
    color: inherit;
  }
`;

const ExperienceItem = styled.li`
  padding-bottom: 15px;

  > span {
    display: block;
    font-weight: 400;
    padding-bottom: 8px;
    color: ${({ theme }) => theme.colors.yellowGrey};
  }

  :hover {
    color: inherit;
  }
`;

const Description = styled.div`
  text-transform: capitalize;
  display: inline-block;
  position: relative;
  line-height: 16px;
  padding-left: 15px;
  padding-bottom: 5px;

  i {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 12px;
    height: 100%;
    font-weight: 700;
    font-style: normal;
    font-size: 12px;
    text-align: center;

    a {
      color: ${({ theme }) => theme.colors.red};
      :link {
        color: ${({ theme }) => theme.colors.red};
      }
      :visited {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;
const Projects = {
  box: styled.div`
    padding-top: 5px;
    padding-left: 15px;
  `,
  collapse: styled.div`
    display: flex;

    svg {
      fill: ${({ theme }) => theme.colors.grey};
    }
    span {
      transition: 0.2s all;

      :not(:first-of-type) {
        cursor: pointer;
        padding-left: 5px;
      }
      :hover {
        :not(:first-of-type) {
          color: ${({ theme }) => theme.colors.main};
        }
      }
      ::selection {
        background-color: ${({ theme }) => theme.colors.main};
      }
    }
  `,
};

type ExperienceProps = {
  handleGa: (label: string) => () => void;
};

function Experience(props: ExperienceProps) {
  const { handleGa } = props;
  const { colors } = useContext(ThemeContext);
  const setSideMenu = useSetRecoilState(sideMenuState);
  const [selectedProject, setSelectedProject] = useState<ProjectType | undefined>(undefined);
  const projectRef = useRef<HTMLDivElement>(null);

  const onClickClose = useCallback(() => {
    if (projectRef.current) {
      anime({
        targets: projectRef.current,
        easing: 'easeInExpo',
        opacity: [1, 0],
        scale: [1, 0],
        visibility: 'hidden',
        borderRadius: ['0%', '100%'],
        complete() {
          setSelectedProject(undefined);

          if (projectRef.current) {
            projectRef.current.style.visibility = 'hidden';
          }
        },
      });
    }
  }, []);

  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape' && !selectedProject) {
        e.stopPropagation();
        onClickClose();
      }
    },
    [onClickClose, selectedProject]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
      setSideMenu(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickProject = useCallback(
    (project: { project: string; description: string; techStacks: string[]; url?: string; label: string }) => (
      e: React.MouseEvent<HTMLSpanElement>
    ) => {
      setSelectedProject(project);
      handleGa(project.label);

      if (projectRef.current) {
        projectRef.current.style.visibility = 'visible';
        anime({
          targets: projectRef.current,
          easing: 'easeOutExpo',
          opacity: [0, 1],
          scale: [0, 1],
          duration: 900,
          borderRadius: ['100%', '15px'],
        });
      }
    },
    [handleGa]
  );

  return (
    <Card title="Experience" color={colors.yellow}>
      <ExperienceContainer>
        <SubTitle>DEVELOPER, PLANNER</SubTitle>
        {Object.entries(EXPERIENCE).map(([company, { period, location, position, homepage, projects = [] }]) => (
          <ExperienceList key={company}>
            <ExperienceItem>
              <span>{`${period} / ${location}`}</span>
              <Description>
                <i>
                  {homepage ? (
                    <a target="_blank" rel="noopener noreferrer" href={homepage}>
                      +
                    </a>
                  ) : (
                    '•'
                  )}
                </i>
                {`${company} / ${position}`}
              </Description>
              {!!projects?.length && (
                <Projects.box>
                  <Projects.collapse>
                    <AngleRight />
                    <span>Project: </span>
                    {projects.map((item, index) => (
                      <Fragment key={item.project}>
                        {index !== 0 ? ', ' : ''}
                        <span onClick={onClickProject(item)}>{item.project}</span>
                      </Fragment>
                    ))}
                  </Projects.collapse>
                </Projects.box>
              )}
            </ExperienceItem>
          </ExperienceList>
        ))}
      </ExperienceContainer>
      <Project project={selectedProject} ref={projectRef} onClose={onClickClose} />
    </Card>
  );
}

export default memo(Experience);
