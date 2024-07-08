import React from 'react';
import styled from 'styled-components';
import imageHero from '../../assets/image/image_hero.png';

const HeroContainer = styled.div`
  padding: 8rem 1rem;
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 8rem 5rem;
    margin-bottom: fixed;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-basis: 40%;
  }
`;

const HeroRight = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-basis: 50%;
  }
`;

const HeroTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 500;
`;

const HeroMonitoring = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1rem;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
`;

const HeroDescription = styled.p`
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 1rem;
  font-weight: 400;
`;

const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  font-weight: 400;
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>Covid ID</HeroTitle>
          <HeroMonitoring>Monitoring Perkembangan Covid</HeroMonitoring>
          <HeroDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </HeroDescription>
          <HeroButton>Vaccine</HeroButton>
        </HeroLeft>
        <HeroRight>
          <HeroImage src={imageHero} alt="Hero Image" />
        </HeroRight>
      </HeroSection>
    </HeroContainer>
  );
}

export default Hero;
