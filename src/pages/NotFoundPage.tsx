import React, { useCallback, memo } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import * as Routes from 'constants/routes';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    padding-bottom: 20px;
  }
`;

const StatusCode = styled.h1`
  display: inline-block;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  margin: 0 20px 0 0;
  padding: 10px 23px 10px 0;
  font-size: 24px;
  font-weight: bold;
  vertical-align: top;
`;

const Message = styled.div`
  display: inline-block;
  line-height: 49px;

  h2 {
    font-size: 14px;
    font-weight: normal;
  }
`;

const Button = styled.button`
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 0 1.125rem;
  height: 2.5rem;
  font-size: 1.125rem;
  transition: 0.2s all;

  :hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

function NotFoundPage() {
  const history = useHistory();

  const onClickButton = useCallback(() => {
    history.push(Routes.HOME);
  }, [history]);

  return (
    <Container>
      <div>
        <StatusCode>404</StatusCode>
        <Message>
          <h2>This page could not be found.</h2>
        </Message>
      </div>
      <Button type="button" onClick={onClickButton}>
        Go Home
      </Button>
    </Container>
  );
}

export default memo(NotFoundPage);
