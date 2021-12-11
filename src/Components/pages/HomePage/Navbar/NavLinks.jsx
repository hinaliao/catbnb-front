import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { Login, Register } from '../../../index';
// import Modal from '../../../templates/Modal/Modal';

const NavLinks = (props) => {
  const { isMobile, closeMenu } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  // const handleShow = () => setShow(true);

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  // const [loginOpen, setLoginOpen] = useState(false);
  // const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div>
      <nav>
        <ul>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
          >
            <Link to="/" onClick={() => (isMobile || !isMobile) && closeMenu()}>
              Home
            </Link>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" onClick={() => (isMobile || !isMobile) && closeMenu()}>
              Serviços
            </Link>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.3 }}
          >
            <button
              type="button"
              onClick={() => (isMobile || !isMobile) && handleClose() && closeMenu()}
            >
              login
            </button>

          </motion.li>
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
