import React from 'react';
import styled from 'styled-components';
import Data from './Data/Data';
import data from '../../utils/constants/indonesia';

const GelobalSectionContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.medium};
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 100%;
  }
`;

const GelobalSectionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GelobalSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const GelobalSectionDescription = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
`;

const GelobalSectionBox = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

function GlobalSection() {
  const objDataCovid = data.indonesia;
  return (
    <GelobalSectionContainer>
      <GelobalSectionSection>
        <GelobalSectionTitle>Indonesia</GelobalSectionTitle>
        <GelobalSectionDescription>Data Covid Berdasarkan Indonesia</GelobalSectionDescription>
        <GelobalSectionBox>
          {objDataCovid.map((obj) => (
            <Data obj={obj} key={obj.status} />
          ))}
        </GelobalSectionBox>
      </GelobalSectionSection>
    </GelobalSectionContainer>
  );
}

export default GlobalSection;
