import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to="/view" activeclassname="active">This is the view</NavLink>
      <NavLink to="/rockets" activeclassname="active">Rockets</NavLink>
      <NavLink to="/missions" activeclassname="active">Mission</NavLink>
    </nav>
  );
}

export default Nav;
