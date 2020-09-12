import Experience from 'components/about/Experience';
import Header from 'components/about/Header';
import Profile from 'components/about/Profile';
import Skills from 'components/about/Skills';
import PageTemplate from 'components/PageTemplate';
import Analytics from 'lib/analytics';
import React, { memo, useCallback, useEffect } from 'react';

import { ACTION, CATEGORY } from 'constants/ga';
import * as Routes from 'constants/routes';

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
      <Header />
      <Profile handleGa={handleGa} />
      <Skills />
      <Experience handleGa={handleGa} />
    </PageTemplate>
  );
}

export default memo(About);
