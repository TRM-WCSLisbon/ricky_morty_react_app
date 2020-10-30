import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link exact to="/" select>HOME</Link></li>
          <li><Link to="/characters" select>Characters</Link></li>
          <li><Link to="/locations" select>Locations</Link></li>
          <li><Link to="/episodes" select>Episodes</Link></li>
        </ul>
      </nav>
    </header>
  );
}
