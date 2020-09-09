import Chip from 'components/Chip';
import React, { memo, forwardRef } from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: auto;
  bottom: auto;
  background-color: ${(props) => props.theme.colors.wood};
  border-radius: 15px;
  transform: scale(0.8);
  width: 100%;
  height: 100%;

  :before {
    content: '';
    clear: top;
  }
`;

const ProjectBox = styled.div`
  padding: 7.7vh 2.7vw;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.media.small} {
    padding: 7.7vh 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2.7vmin;
  left: 2.8vmin;
  padding: 10px;
  z-index: 200;
  outline: none;
  width: 43px;
  cursor: pointer;
`;

const Line = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4px;
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s ease-out;
  transform: translateZ(0);

  :nth-of-type(1) {
    transform: translateY(6px) rotateZ(-135deg);
  }
  :nth-of-type(2) {
    transform: rotateZ(135deg);
  }
`;

const Title = styled.h3`
  font-weight: bold;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};

  a {
    transition: 0.2s all;

    :hover {
      color: ${({ theme }) => theme.colors.main};
    }
  }

  ${(props) => props.theme.media.small} {
    font-size: 2.5em;
  }
`;

const Description = styled.p`
  padding-bottom: 40px;
`;

const Article = styled.h4`
  font-size: 24px;
  padding-bottom: 10px;
  font-weight: bold;
`;

type ProjectProps = {
  project:
    | {
        project: string;
        description: string;
        techStacks: string[];
        url?: string;
      }
    | undefined;
  onClose: () => void;
};

const Project = forwardRef<HTMLDivElement, ProjectProps>((props, ref) => {
  const { project, onClose } = props;

  return (
    <ProjectContainer ref={ref}>
      {!!project && (
        <ProjectBox>
          <CloseButton aria-label="close" onClick={onClose}>
            <Line />
            <Line />
          </CloseButton>
          <Title>
            {project?.url ? (
              <a target="_blank" rel="noopener noreferrer" href={project.url}>
                {project.project}
              </a>
            ) : (
              project.project
            )}
          </Title>
          <Description>{project.description}</Description>
          <Article>Stacks</Article>
          {project.techStacks.map((stack, index) => (
            <Chip key={stack} label={stack} />
          ))}
        </ProjectBox>
      )}
    </ProjectContainer>
  );
});

Project.displayName = 'Project';

export default memo(Project);
