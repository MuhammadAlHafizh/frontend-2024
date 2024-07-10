import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Menu from './Menu/Menu';

const NavbarContainer = styled.div`
  background-color: ${(props) => props.theme.colors.green};
  padding: 2rem;
  color: #fff;
  padding-right: 9%;
  padding-left: 6%;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding-right: 20%;
  }
`;

const NavbarSection = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavbarBrand = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 500;
  margin-bottom: 0;
  cursor: pointer;
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-top: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const NavbarRight = styled.div`
  display: flex;
`;

const NavbarRightHide = styled(NavbarRight)`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarItem = styled.li`
  margin-bottom: 1rem;
  cursor: pointer;
  font-weight: 400;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 1rem;
  }
`;

function Navbar() {
  const [isShowMobile, setIsShowMobile] = useState(true);
  const [windowWidthMobile, setWindowWidthMobile] = useState(window.innerWidth);

  // Sets the width of the browser window when the screen size changes
  useEffect(() => {
    const handleResize = () => {
      setWindowWidthMobile(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleans up event listeners when components unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Updates the list display based on the size of the browser window
  useEffect(() => {
    if (windowWidthMobile < 768) {
      setIsShowMobile(false);
    } else {
      setIsShowMobile(true);
    }
  }, [windowWidthMobile]);

  function handleClick() {
    setIsShowMobile((prev) => !prev);
  }

  return (
    <>
      <NavbarContainer>
        <NavbarSection>
          <NavbarLeft>
            <NavbarBrand>Covid ID</NavbarBrand>
            <Menu onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="white"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Menu>
          </NavbarLeft>
          <div className={isShowMobile ? undefined : 'navbar__right_hide'}>
            <NavbarRight as={isShowMobile ? 'div' : NavbarRightHide}>
              <NavbarList>
                <NavbarItem>
                    <Link to="/" style={{ textDecoration: 'none', color : '#FFFF' }}>Global</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/covid/indonesia" style={{ textDecoration: 'none', color : '#FFFF' }}>Indonesia</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/covid/provinsi" style={{ textDecoration: 'none', color : '#FFFF' }}>Provinsi</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to="/covid/about" style={{ textDecoration: 'none', color : '#FFFF' }}>About</Link>
                </NavbarItem>
              </NavbarList>
            </NavbarRight>
          </div>
        </NavbarSection>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
