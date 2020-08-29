import Menu from 'components/home/Menu';
import Profile from 'components/home/Profile';
import React, { useEffect, useState } from 'react';
import background from 'static/images/bg.jpg';
import styled from 'styled-components';

const IndexContainer = styled.div<{ bgUrl: string | undefined }>`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  background: url(${(props) => props.bgUrl}) center center no-repeat fixed;
  background-size: cover;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(1);
  opacity: 0.9;
  user-select: none;

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
  opacity: initial;

  @media only screen and (max-width: 320px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
  @media only screen and (max-width: 640px) {
    height: auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0.3rem;
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
    <IndexContainer bgUrl={background}>
      <CardBox className={loaded ? undefined : 'preload'}>
        <Card>
          <Profile />
          <Menu />
        </Card>
      </CardBox>
    </IndexContainer>
  );
}

export default Home;
