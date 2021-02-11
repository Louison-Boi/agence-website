// eslint-disable-next-line import/no-unresolved
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleChange }) => (
  <nav>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>
    </div>
    <div className="toggle-container">

      <button type="submit" onClick={() => handleChange((prevMode) => !prevMode)}> Changer le mode</button>
    </div>
  </nav>
);

export default Navbar;
