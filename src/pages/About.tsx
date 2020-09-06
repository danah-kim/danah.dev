import Experience from 'components/about/Experience';
import Header from 'components/about/Header';
import Profile from 'components/about/Profile';
import Skills from 'components/about/Skills';
import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 40px auto 0;
  overflow: hidden;
  ${(props) => props.theme.media.small} {
    margin: 20px auto 0;
  }
`;

const Container = styled.div`
  ${(props) => props.theme.media.customMax(1280)} {
    padding: 0 20px;
  }
`;

function About() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Profile />
        <Skills />
        <Experience />
      </Container>
    </Wrapper>
  );
}

export default memo(About);
