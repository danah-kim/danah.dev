import React, { memo } from 'react';
import styled from 'styled-components';

const ChipBox = styled.div`
  margin: 4px;
  color: ${({ theme }) => theme.colors.white};
  height: 32px;
  display: inline-flex;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.main};

  span {
    padding-left: 12px;
    padding-right: 12px;
    text-overflow: ellipsis;
  }

  :hover {
    animation: ${(props) => props.theme.keyframes.flutter} 0.5s linear;
  }
`;

type ChipProps = {
  label: string;
};

function Chip({ label }: ChipProps) {
  return (
    <ChipBox>
      <span>{label}</span>
    </ChipBox>
  );
}

export default memo(Chip);
