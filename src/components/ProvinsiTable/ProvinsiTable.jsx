import React from 'react';
import styled from 'styled-components';
import Data from './Data/Data';

const ProvinsiContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.xlarge};
  background-color: ${({ theme }) => theme.colors.white};

`;

const ProvinsiSection = styled.section`

  min-width: 100%;
  margin: 0 auto;
  overflow-y: auto; /* Enable vertical scrolling */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none; /* WebKit based browsers */
  }
`;

const ProvinsiTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const ProvinsiSubtitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
`;

const ProvinsiTableContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProvinsiTableStyled = styled.table`
  width: 81.3%;
  border-collapse: collapse;
  margin-top: ${({ theme }) => theme.spacing.medium};

  th, td {
    padding: ${({ theme }) => theme.spacing.small};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  th {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }

  td {
    color: ${({ theme }) => theme.colors.text};
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;

function ProvinsiTable({ objProvinsi }) {
  return (
    <ProvinsiContainer>
      <ProvinsiSection>
        <ProvinsiTitle>Provinsi</ProvinsiTitle>
        <ProvinsiSubtitle>Data Covid Berdasarkan Provinsi</ProvinsiSubtitle>
        <ProvinsiTableContainer>
          <ProvinsiTableStyled border={1}>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
                <th>Dirawat</th>
              </tr>
            </thead>
            <tbody>
              {objProvinsi.map((objData, index) => (
                <Data key={objData.kota} objData={objData} index={index} />
              ))}
            </tbody>
          </ProvinsiTableStyled>
        </ProvinsiTableContainer>
      </ProvinsiSection>
    </ProvinsiContainer>
  );
}

export default ProvinsiTable;
