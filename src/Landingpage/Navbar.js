import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import download12 from './download12.jpeg'; // Ensure the path is correct
import './Navbar.css'; // Ensure the CSS file exists in the same directory

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={download12} alt="Travel App Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/destinations">Destinations</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/stay">Stay</Link>
        </li>
        <li>
          <Link to="/cuisines">Cuisines</Link>
        </li>
        <li>
          <Link to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
