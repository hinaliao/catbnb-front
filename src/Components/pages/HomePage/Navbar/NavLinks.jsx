import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { Login, Register } from '../../../index';

const NavLinks = (props) => {
  const { isMobile, closeMenu } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  // const [loginOpen, setLoginOpen] = useState(false);
  // const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body>
          {/* <Login
            open={loginOpen}
            setLoginOpen={setLoginOpen}
            setSignupOpen={setSignupOpen}
          />
          <Register
            open={signupOpen}
            setLoginOpen={setLoginOpen}
            setSignupOpen={setSignupOpen}
          /> */}
        </Modal.Body>
      </Modal>

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
            <Button
              href="#"
              variant="link"
              onClick={() => (isMobile || !isMobile) && handleShow && closeMenu()}
            >
              Login
            </Button>
          </motion.li>
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
