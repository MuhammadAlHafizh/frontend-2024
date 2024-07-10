import React from 'react';
import styled from 'styled-components';

const DataContainer = styled.div`
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 3rem;
  margin-top: ${({ theme }) => theme.spacing.large};
  width: 100%;
  height: auto;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: ${({ theme }) => theme.spacing.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: ${({ theme }) => theme.spacing.large};
    width: 384px;
    height: 230px;
  }
`;

const DataStatus = styled.h3`
  margin-top: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
`;

const DataJumlah = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  margin-top: -0.5em;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  color: ${({ color }) => color};
`;

function Data(props) {
  const { obj } = props;
  let color = '';
  if (obj.status === 'recovered') {
      color = '#06D6A0';
      obj.status  = 'Recovered';
  } else if (obj.status === 'confirmed') {
    color = '#118AB2';
    obj.status  = 'Confirmed';
  } else if (obj.status === 'death') {
      color = '#EF476F';
      obj.status  = 'Death';
  }

  return (
    <DataContainer>
      <DataStatus>{obj.status}</DataStatus>
      <DataJumlah color={color}>{obj.total}</DataJumlah>
    </DataContainer>
  );
}

export default Data;
