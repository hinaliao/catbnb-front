/* eslint-disable jsx-a11y/anchor-is-valid */
import React/* , { useState } */ from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h4>Sobre</h4>
          <div className="centered pe">
            <Link to="#" className="links">
              <p>Quem Somos?</p>
            </Link>

            <Link to="#" className="links">
              <p>Seja um host</p>
            </Link>

            <Link to="#" className="links">
              <p>Trabalhe conosco</p>
            </Link>

          </div>
        </div>

        <div>
          <h4>Atendimento</h4>
          <div className="centered pe">
            <Link to="#" className="links">
              <p>Telefone para emergências</p>
            </Link>

            <Link to="#" className="links">
              <p>Política de privacidade</p>
            </Link>

            <Link to="/aboutus" className="links">
              <p>Termos de serviços</p>
            </Link>

          </div>
        </div>

        <div>
          <h4>Contato</h4>
          <div className="centered pe">

            <Link to="#" className="links">
              <p>sac@cat-bnb.com.br</p>
            </Link>

            <Link to="#" className="links">
              <p>Mídias Sociais</p>
            </Link>
            <SocialIcon url="https://www.linkedin.com/in/michelle-p-liao/" bgColor="#4B4278" className="social-media-icons" />
            <SocialIcon url="https://twitter.com/hnalkn" bgColor="#4B4278" className="social-media-icons" />
            <SocialIcon url="https://www.instagram.com/juliasakakibara/" bgColor="#4B4278" className="social-media-icons" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
