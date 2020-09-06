import React, { memo } from 'react';
import avatar from 'static/images/avatar.png';
import styled from 'styled-components';

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin: 35px 0;
  padding: 2px;
  border-radius: 50%;
  transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
`;

const NameBox = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: center;

  ${(props) => props.theme.media.xsmall} {
    flex-direction: column;
  }
`;

const Name = styled.span`
  margin-right: 8px;
  font-weight: 800;

  ${(props) => props.theme.media.xsmall} {
    margin-bottom: 0.5em;
  }
`;

const NickName = styled.span`
  display: inline-block;
  font-size: 18px;
  padding: 6px 10px;
  font-weight: bolder;
  letter-spacing: 0.5px;
  border-radius: 12px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.main};
  opacity: 0.8;
  transform-origin: center;
  animation: ${(props) => props.theme.keyframes.flutter} 2s infinite linear;

  ${(props) => props.theme.media.xsmall} {
    width: fit-content;
    margin: auto;
  }
`;

function Info() {
  return (
    <>
      <Avatar src={avatar} alt="avatar" />
      <NameBox>
        <Name>Danah Kim</Name>
        <NickName>@sweetmilkys</NickName>
      </NameBox>
    </>
  );
}

export default memo(Info);
