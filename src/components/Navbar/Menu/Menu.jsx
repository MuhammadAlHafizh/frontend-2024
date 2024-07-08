import React from 'react';
import styled from 'styled-components';

const NavbarMenuMobile = styled.button`
  background: none;
  border: none;
  display: flex;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

function Menu({ onClick, children }) {
  return <NavbarMenuMobile onClick={onClick}>{children}</NavbarMenuMobile>;
}

export default Menu;
