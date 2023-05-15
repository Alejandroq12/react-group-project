import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to="/view" activeclassname="active">This is the view</NavLink>
    </nav>
  );
}

export default Nav;
