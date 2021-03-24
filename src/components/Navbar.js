import React from 'react';
import { Nav } from '../styles/Nav.element';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Link id="logo" to="/">
          <h1>Ultra</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default Navbar;
