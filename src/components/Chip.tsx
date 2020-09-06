import React, { memo } from 'react';
import styled from 'styled-components';

const ChipBox = styled.div`
  margin: 4px;
  color: ${({ theme }) => theme.colors.white};
  /* border: none; */
  /* cursor: default; */
  height: 32px;
  display: inline-flex;
  /* outline: 0; */
  /* padding: 0; */
  /* font-size: 0.8125rem; */
  /* box-sizing: border-box; */
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  /* font-family: "Roboto", "Helvetica", "Arial", sans-serif; */
  /* white-space: nowrap; */
  border-radius: 16px;
  /* vertical-align: middle; */
  /* justify-content: center; */
  /* text-decoration: none; */
  background-color: ${({ theme }) => theme.colors.main};

  span {
    padding-left: 12px;
    padding-right: 12px;
    text-overflow: ellipsis;
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
