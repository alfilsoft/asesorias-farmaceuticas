import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          AsesoriasFarmacéuticas.com
        </Link>
        <nav className="nav">
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li> 
            <li className="nav-link">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
