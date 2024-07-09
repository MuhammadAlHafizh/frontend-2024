import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Data from './Data/Data';
import axios from 'axios';

const SituationsRegionsContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.large};
  min-width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 100%;
  }
`;

const SituationsRegionsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SituationsRegionsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

const SituationsRegionsDescription = styled.h4`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
`;

const SituationsRegionsBox = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

function SituationsRegions({ situation }) {
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTitle(situation === 'indonesia' ? 'Indonesia Situation' : 'Global Situation');

    const fetchData = async () => {
      try {
        const endpoint = situation === 'indonesia'
          ? 'https://covid-fe-2023.vercel.app/api/indonesia.json'
          : 'https://covid-fe-2023.vercel.app/api/global.json';
        const response = await axios.get(endpoint);
        console.log(response.data);
        setData(response.data.regions); // Assuming response.data.regions contains the regions data
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [situation]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <SituationsRegionsContainer>
      <SituationsRegionsSection>
        <SituationsRegionsTitle>{title}</SituationsRegionsTitle>
        <SituationsRegionsDescription>
          Data Covid Berdasarkan {situation === 'indonesia' ? 'Indonesia' : 'Global'}
        </SituationsRegionsDescription>
        <SituationsRegionsBox>
          {data.map((obj, index) => (
            <Data obj={obj} key={`${obj.name}-${index}`} />
          ))}
        </SituationsRegionsBox>
      </SituationsRegionsSection>
    </SituationsRegionsContainer>
  );
}

export default SituationsRegions;
