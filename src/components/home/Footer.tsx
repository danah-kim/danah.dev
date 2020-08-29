import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.footer`
  margin: 20px 0;
  text-align: center;
  width: 100%;

  a {
    color: ${(props) => props.theme.colors.lightGrey};
  }
`;

function Footer() {
  return (
    <FooterBox>
      Copyright &copy; 2020
      <a href="https://github.com/sweetmilkys"> Danah</a>
    </FooterBox>
  );
}

export default Footer;
