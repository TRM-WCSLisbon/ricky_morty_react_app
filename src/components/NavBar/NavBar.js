import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Nav, Background } from './styles';

const NavBar = () => (
  <Link exact to="/" select>
    <Background>
      <Nav>
        <ul id="left">
          <li><Link to="/characters/" select>Characters</Link></li>
          <li><Link to="/locations" select>Locations</Link></li>
        </ul>
        <ul>
          <li><Link to="/episodes" select>Episodes</Link></li>
          <li><Link to="/contact" select>Contact Us</Link></li>
        </ul>
      </Nav>
    </Background>
  </Link>

);
export default NavBar;

// <!-- Mobile Menu -->
//     <div id="mobile-menu" class="mobile-menu">
//       <ul class="mobile-links">
//         <li class="nav-list"><a href="#">Home</a></li>
//         <li class="nav-list"><a href="#">Gallery</a></li>
//         <li class="nav-list"><a href="#">Blog</a></li>
//         <li class="nav-list"><a href="#">Portfolio</a></li>
//         <li class="nav-list"><a href="#">Contact</a></li>
//       </ul>
//     </div>
