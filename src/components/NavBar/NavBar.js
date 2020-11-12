import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Nav, Background } from './styles';

const NavBar = () => (
  <Link exact to="/" select>
    <Background>
      <Nav>
        <ul id="left">
          <li>
            <Link to="/characters/" select>
              Characters
            </Link>
          </li>
          <li>
            <Link to="/locations" select>
              Locations
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/episodes" select>
              Episodes
            </Link>
          </li>
          <li>
            <Link to="/contact" select>
              Contact Us
            </Link>
          </li>
        </ul>
      </Nav>
    </Background>
  </Link>
);
export default NavBar;
