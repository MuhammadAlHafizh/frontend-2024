import React from 'react';
import styled from 'styled-components';
import maskConfirmation from '../../../assets/image/mask_confirmation.png'; // Assuming this is the correct path to your image

const DataContainer = styled.div`
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  height: auto;
  transition: transform 0.2s ease-in-out;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: ${({ theme }) => theme.spacing.medium};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: ${({ theme }) => theme.spacing.large};
    width: 384px;
    height: auto;
  }
`;

const DataStatus = styled.h3`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
`;

const DataItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin: ${({ theme }) => theme.spacing.small} 0;
`;

const DataText = styled.div`
  display: flex;
  flex-direction: column;
`;

const DataLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.gray};
`;

const DataValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ color }) => color}; /* Use color prop for dynamic color */
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;

const ConfirmedIcon = () => (
  <IconContainer>
    <img src={maskConfirmation} alt="Confirmed Icon" />
  </IconContainer>
);

const RecoveredIcon = () => (
  <IconContainer>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#118AB2" width="24px" height="24px">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.41L6.59 13l1.41-1.41L10 13.17l4.59-4.59L16 10l-6 6.41z"/>
    </svg>
  </IconContainer>
);

const DeathIcon = () => (
  <IconContainer>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EF476F" width="24px" height="24px">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.41L6.59 13l1.41-1.41L10 13.17l4.59-4.59L16 10l-6 6.41z"/>
    </svg>
  </IconContainer>
);

function Data({ obj }) {
  if (!obj) return null; // Handle null or undefined obj gracefully

  return (
    <DataContainer>
      <DataStatus>{obj.name}</DataStatus>
      <DataItem>
        <DataText>
          <DataLabel>Confirmed:</DataLabel>
          <DataValue color="#06D6A0">{obj.numbers.confirmed}</DataValue>
        </DataText>
        <ConfirmedIcon />
      </DataItem>
      <DataItem>
        <DataText>
          <DataLabel>Recovered:</DataLabel>
          <DataValue color="#118AB2">{obj.numbers.recovered}</DataValue>
        </DataText>
        <RecoveredIcon />
      </DataItem>
      <DataItem>
        <DataText>
          <DataLabel>Death:</DataLabel>
          <DataValue color="#EF476F">{obj.numbers.death}</DataValue>
        </DataText>
        <DeathIcon />
      </DataItem>
    </DataContainer>
  );
}

export default Data;
