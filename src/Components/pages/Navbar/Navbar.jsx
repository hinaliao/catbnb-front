import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import logo from '../../../Images/logo.png';

import style from './Navbar.module.css';

const NavBar = () => {
  return (
    <div className={style.Navbar}>
      <Link to="/">
        <img src={logo} alt="CatBnB Logo" />
      </Link>
      <Navigation />
    </div>
  );
};

export default NavBar;
