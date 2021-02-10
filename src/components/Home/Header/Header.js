import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
        <Link to="/"
          className="link">
          <li>Home</li>
        </Link>
        </ul>
        <ul>
          <Link to="/dashboard" className="link">
            <li>Dashboard</li>
          </Link>
        </ul>
        <ul>
          <li>About</li>
        </ul>
        <ul>
          <li>Service</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;