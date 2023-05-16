import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import './nav.css';

function Nav() {
  return (
    <nav>
      <div className="nav-left">
        <img className="nav-logo" src={logo} alt="Space Travelers' Hub Logo" />
        <span className="nav-title">Space Travelers&apos; Hub</span>
      </div>
      <div className="nav-right">
        <NavLink className="nav-link" to="/rockets" activeClassName="active">Rockets</NavLink>
        <NavLink className="nav-link" to="/missions" activeClassName="active">Missions</NavLink>
        <div className="nav-divider" />
        <NavLink className="nav-link" to="/view" activeClassName="active">My Profile</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
