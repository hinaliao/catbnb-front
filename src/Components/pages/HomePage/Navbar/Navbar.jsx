import React from 'react';
import Navigation from './Navigation';
import logo from '../../../../Images/logo.png';

import style from './Navbar.module.css';

const NavBar = () => {
  return (
    <div className={style.Navbar}>
      <img src={logo} alt="CatBnB Logo" className={style.Logo} />
      <Navigation />
    </div>
  );
};

export default NavBar;
