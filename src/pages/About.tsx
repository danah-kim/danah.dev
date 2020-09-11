import Experience from 'components/about/Experience';
import Header from 'components/about/Header';
import Profile from 'components/about/Profile';
import Skills from 'components/about/Skills';
import PageTemplate from 'components/PageTemplate';
import Analytics from 'lib/analytics';
import React, { memo, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { ACTION, CATEGORY } from 'constants/ga';
import * as Routes from 'constants/routes';

const Container = styled.div`
  ${(props) => props.theme.media.customMax(1280)} {
    padding: 0 20px;
  }
`;

function About() {
  useEffect(() => {
    Analytics.pageView(Routes.ABOUT);
  }, []);

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

  return (
    <PageTemplate isMenu title="About | Danah" description="danah's resume" canonical={Routes.ABOUT} type="portfolio">
      <Container>
        <Header />
        <Profile handleGa={handleGa} />
        <Skills />
        <Experience handleGa={handleGa} />
      </Container>
    </PageTemplate>
  );
}

export default memo(About);
