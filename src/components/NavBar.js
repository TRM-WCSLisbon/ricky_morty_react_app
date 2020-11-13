import React from "react";
import { NavLink as Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link exact to="/" select>
            Home
          </Link>
        </li>
        <li>
          <Link to="/characters" select>
            Characters
          </Link>
        </li>
        <li>
          <Link to="/locations?page=1" select>
            Locations
          </Link>
        </li>
        <li>
          <Link to="/episodes?page=1" select>
            Episodes
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavBar;
