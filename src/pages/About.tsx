import Experience from 'components/about/Experience';
import Header from 'components/about/Header';
import Profile from 'components/about/Profile';
import Skills from 'components/about/Skills';
import PageTemplate from 'components/PageTemplate';
import React, { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.media.customMax(1280)} {
    padding: 0 20px;
  }
`;

function About() {
  return (
    <PageTemplate isMenu>
      <Container>
        <Header />
        <Profile />
        <Skills />
        <Experience />
      </Container>
    </PageTemplate>
  );
}

export default memo(About);
