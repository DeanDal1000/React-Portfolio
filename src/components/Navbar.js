import React from 'react';
import { Line, Nav } from '../styles/Nav.element';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Nav>
        <Link id="logo" to="/">
          <h1>Dean J.D</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">1. About Me</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/' ? '50%' : '0%' }}
            />
          </li>
          <li>
            <Link to="/projects">2. Projects</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/projects' ? '50%' : '0%' }}
            />
          </li>
          <li>
            <Link to="/contact">3. Contact</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: '0%' }}
              animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
            />
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default Navbar;
