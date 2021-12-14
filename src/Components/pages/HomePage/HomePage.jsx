import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const animateFrom = { opacity: 0, x: -40 };
  const animateTo = { opacity: 1, x: 0 };

  const leftArrow = <BsArrowRight size="24px" />;

  return (
    <div>
      <div className="home-container">
        <div className="left-pad">
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
            className="one-div"
          >
            <h1>Cuidamos</h1>
            <h1>do seu</h1>
            <h1>gato</h1>
            <button
              type="button"
              className="agende-btn"
              onClick={() => navigate('/servicos')}
            >
              Agende aqui&ensp;
              {leftArrow}
            </button>
          </motion.div>
          <div className="another-div">
            <motion.div
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.3 }}
              className="first-img"
            />
          </div>
        </div>
        <div className="right-pad">
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.5 }}
            className="second-img"
          />
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.8 }}
            className="third-img"
          />
        </div>
      </div>
      <div className="viag">
        <h2>Viaje com sossego</h2>
        <h2>sabendo que seu pet está</h2>
        <h2>sendo bem cuidado</h2>
      </div>
    </div>
  );
};

export default HomePage;
