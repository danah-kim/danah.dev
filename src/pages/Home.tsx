import Footer from 'components/home/Footer';
import Info from 'components/home/Info';
import Menu from 'components/home/Menu';
import Message from 'components/home/Message';
import ReactHelmet from 'components/ReactHelmet';
import Analytics from 'lib/analytics';
import React, { memo, useEffect, useState } from 'react';
import background from 'static/images/bg.png';
import styled from 'styled-components';

import * as Routes from 'constants/routes';

const Container = styled.div<{ bgUrl: string | undefined }>`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.lightPink};
  background: url(${(props) => props.bgUrl}) center center no-repeat fixed;
  background-size: cover;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  transform: scale(1);

  .preload {
    transition: none !important;
    transform: scale(0.9);
    opacity: 0;
    animation: none !important;
  }
`;

const CardBox = styled.div`
  text-align: center;
  position: relative;
  margin: auto;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
  box-shadow: ${(props) => props.theme.shadows.cardBox};

  ${(props) => props.theme.media.small} {
    height: auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0.3rem;
    margin-top: 50px;
    border-radius: 0;
  }
  ${(props) => props.theme.media.xsmall} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
`;

const Card = styled.div`
  margin: 0 auto;
  max-width: 500px;
  transition: all 1s ease;
`;

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Analytics.pageView(Routes.HOME);

    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return (
    <>
      <ReactHelmet title="Danah" description="Software Engineer | Web Developer" />
      <Container bgUrl={background}>
        <CardBox className={loaded ? undefined : 'preload'}>
          <Card>
            <Info />
            <Message />
            <Menu />
          </Card>
        </CardBox>
        <Footer />
      </Container>
    </>
  );
}

export default memo(Home);
