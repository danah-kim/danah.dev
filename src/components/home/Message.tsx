import React from 'react';
import styled from 'styled-components';

const MessageBox = styled.div`
  margin: 40px 0;
  opacity: 0.8;

  :before {
    border-top: 1px solid ${(props) => props.theme.colors.grey};
    width: 100%;
    content: ' ';
    display: block;
    height: 24px;
    opacity: 0.1;
  }
  :after {
    border-bottom: 1px solid ${(props) => props.theme.colors.grey};
    width: 100%;
    content: ' ';
    display: block;
    height: 24px;
    opacity: 0.1;
  }
`;

function Message() {
  return (
    <MessageBox>
      <p>Slow, but steady progress</p>
    </MessageBox>
  );
}

export default Message;
