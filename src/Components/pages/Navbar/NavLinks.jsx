/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLinks = (props) => {
  const { closeMenu, isUserLogged, verifyRole } = props;

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
          >
            <Link to="/" onClick={() => closeMenu()}>
              Home
            </Link>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
          >
            <Link to="/servicos" onClick={() => closeMenu()}>
              Serviços
            </Link>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.3 }}
          >
            {!isUserLogged ? (
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  navigate('/login');
                }}
              >
                Login
              </button>
            ) : verifyRole === 'Customer' ? (
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  navigate('/host-profile');
                }}
              >
                Meu Perfil
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  navigate('/meu-perfil');
                }}
              >
                Meu Perfil
              </button>
            )}
          </motion.li>
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
