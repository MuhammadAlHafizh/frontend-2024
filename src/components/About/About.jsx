import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62vh;
  background-color: white;
  color: black;
  text-align: center;
`;

const AboutText = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

function About(){
  return (
    <AboutContainer>
      <AboutText>
        This About Page is Dedicated For You.<br />
        Create page as your wish.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
