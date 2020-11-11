import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import Burger from './Burger';

import { Background } from './styles';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

`;

const Navbar = () => (
  <div>
    <Link exact to="/" select>
      <Background />
    </Link>
    <Nav>
      <Burger />
    </Nav>
  </div>
);

export default Navbar;
