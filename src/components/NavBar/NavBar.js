import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Nav, Background, Mobile } from './styles';

// myFunction = (Nav) => {
//   const nav = Nav;
//   if (nav.style.display === 'block') {
//     nav.style.display = 'none';
//   } else {
//     nav.style.display = 'block';
//   }
// };

const NavBar = () => (
  <Link exact to="/" select>
    {/* <Mobile> */}
    <Background>
      <Nav>
        <ul id="left">
          <li><Link to="/characters/" select>Characters</Link></li>
          <li><Link to="/locations" select>Locations</Link></li>
        </ul>
        <ul>
          <li><Link to="/episodes" select>Episodes</Link></li>
          <li><Link to="/contact" select>Contact Us</Link></li>
          {/* <li onClick={myFunction()}>
              <i className="fa fa-bars" />
            </li> */}
        </ul>
      </Nav>
    </Background>
    {/* </Mobile> */}
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
