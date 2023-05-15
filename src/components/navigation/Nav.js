import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/view" activeClassName="active">This is the view</Link>
    </nav>
  );
}

export default Nav;
