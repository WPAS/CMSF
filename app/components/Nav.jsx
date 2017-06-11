import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => { return (
  <header>
    <h1 className="text-center">Best website ever ;)</h1>
    <nav className="top-bar row">
      <Link to="/" className="small-4 small-offset-1 medium-2 medium-offset-1 columns">Main page</Link>
      <Link to="/page/1" className="small-7 medium-9 columns">About us</Link>
    </nav>
  </header>
)};

export default Nav;
