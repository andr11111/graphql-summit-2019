import React from 'react';
import { Link } from 'react-router-dom';

import { AuthButton } from './AuthButton';

const NavBar = () => (
  <div id="nav">
    {/* App title */}
    <h1>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      Insurance App
    </h1>
    <br />
    <Link to="/">Home</Link>
    <span> | </span>
    <AuthButton />
  </div>
);

export { NavBar };
