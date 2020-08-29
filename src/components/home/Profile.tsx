import React from 'react';
import avatar from 'static/images/avatar.png';
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 35px 0;
  padding: 2px;
  border-radius: 50%;
  transition: 0.5s all;
  :hover {
    transform: scale(1.2);
  }
`;

const NameBox = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

const Name = styled.span`
  margin-right: 8px;
  font-weight: 800;

  @media only screen and (max-width: 320px) {
    margin: auto;
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

  @media only screen and (max-width: 320px) {
    width: fit-content;
    margin: auto;
  }
`;

function Profile() {
  return (
    <>
      <ProfileImage src={avatar} alt="avatar" />
      <NameBox>
        <Name>Danah Kim</Name>
        <NickName>@sweetmilkys</NickName>
      </NameBox>
    </>
  );
}

export default Profile;
