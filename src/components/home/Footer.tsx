import React, { memo } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin: 20px 0;
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.colors.lightGrey};

  a {
    :hover {
      transition: 0.2s;
      color: ${(props) => props.theme.colors.main};
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; 2020
      <a href="https://github.com/sweetmilkys"> Danah</a>. All rights reserved.
    </FooterContainer>
  );
}

export default memo(Footer);
