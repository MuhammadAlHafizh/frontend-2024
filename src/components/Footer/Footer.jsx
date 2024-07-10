import styled from 'styled-components';
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  background-color: #1abc9c;
  padding: 2rem;
  color: #fff;
  padding-right: 20%;
  padding-left: 6%;
`;

const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterTitle = styled.h3`
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 2rem;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const FooterAuthor = styled.h4`
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1rem;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 26px;
  font-weight: 400;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const FooterItem = styled.li`
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1rem;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <div>
          <FooterTitle>Covid ID</FooterTitle>
          <FooterAuthor>Junior Programmer Muhammad Al Hafizh</FooterAuthor>
        </div>
        <div>
          <FooterList>
            <FooterItem>
                <Link to="/" style={{ textDecoration: 'none', color : '#FFFF' }}>Global</Link>
            </FooterItem>
            <FooterItem>
                <Link to="/covid/indonesia" style={{ textDecoration: 'none', color : '#FFFF' }}>Indonesia</Link>
            </FooterItem>
            <FooterItem>
                <Link to="/covid/provinsi" style={{ textDecoration: 'none', color : '#FFFF' }}>Provinsi</Link>
            </FooterItem>
            <FooterItem>
                <Link to="/covid/about" style={{ textDecoration: 'none', color : '#FFFF' }}>About</Link>
            </FooterItem>
          </FooterList>
        </div>
      </FooterSection>
    </FooterContainer>
  );
}

export default Footer;
