import React, { memo } from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  margin: 20px 0;
  opacity: 0.8;

  :before {
    width: 100%;
    content: ' ';
    display: block;
    height: 1px;
    background-color: ${(props) => props.theme.colors.line};
  }
  :after {
    width: 100%;
    content: ' ';
    display: block;
    height: 1px;
    background-color: ${(props) => props.theme.colors.line};
  }
  p {
    padding: 20px 0;
  }
`;

function Message() {
  return (
    <MessageContainer>
      <p>Slow, but steady progress</p>
    </MessageContainer>
  );
}

export default memo(Message);
