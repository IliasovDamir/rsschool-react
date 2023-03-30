import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav_ul">
          <li>
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/forms">
              Forms
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
