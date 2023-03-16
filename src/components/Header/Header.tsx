import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
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
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
