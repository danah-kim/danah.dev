import React, { memo } from 'react';
import styled from 'styled-components';

const ChipBox = styled.div<{ hasEvent: boolean; size?: number }>`
  margin: 4px;
  color: ${({ theme }) => theme.colors.white};
  height: 32px;
  display: inline-flex;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.main};
  cursor: ${({ hasEvent }) => (hasEvent ? 'pointer' : '')};

  span {
    padding-left: 12px;
    padding-right: 12px;
    text-overflow: ellipsis;
    font-size: ${({ size }) => (size ? `${size}px` : '')};
  }

  :hover {
    animation: ${(props) => props.theme.keyframes.flutter} 0.5s linear;
  }
`;

type ChipProps = {
  label: string;
  size?: number;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
};

function Chip(props: ChipProps) {
  const { label, size, onClick } = props;

  return (
    <ChipBox onClick={onClick} hasEvent={!!onClick} size={size}>
      <span>{label}</span>
    </ChipBox>
  );
}

export default memo(Chip);
