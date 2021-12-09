import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';
import NavLinks from './NavLinks';
import style from './Navbar.module.css';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const hamburguerIcon = (
    <FiMenu
      className={style.hamburguer}
      size="24px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeBtn = (
    <MdOutlineClose
      className={style.hamburguer}
      size="24px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMenu = () => setOpen(false);

  return (
    <nav className={style.Navigation}>
      {open ? closeBtn : hamburguerIcon}
      {open && <NavLinks closeMenu={closeMenu} />}
    </nav>
  );
};

export default Navigation;
