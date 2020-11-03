import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import logo from './logo_project2.png';
import { Nav } from './NavStyle';

const NavBar = () => (
  <Nav>
    <Link exact to="/" select><img src={logo} alt="logo" /></Link>
    <nav>
      <ul>
        <li><Link to="/characters" select>Characters</Link></li>
        <li><Link to="/locations" select>Locations</Link></li>
        <li><Link to="/episodes" select>Episodes</Link></li>
      </ul>
    </nav>
  </Nav>

);
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
export default NavBar;
