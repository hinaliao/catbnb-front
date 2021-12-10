/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h4>Sobre</h4>
        <Link to="#">
          <h5>Quem somos?</h5>
        </Link>

        <Link to="#">
          <h5>Seja um host</h5>
        </Link>

        <Link to="#">
          <h5>Trabalhe conosco</h5>
        </Link>
      </div>

      <div className="container">
        <h4>Atendimento</h4>
        <Link to="#">
          <h5>Telefones de Emergência</h5>
        </Link>

        <Link to="#">
          <h5>Termos de Uso</h5>
        </Link>

        <Link to="#">
          <h5>Política de Privacidade</h5>
        </Link>
      </div>

      <div className="container">
        <h4>Contato</h4>
        <h5>+55 11 99898-9898</h5>
        <h5>Mídias Sociais</h5>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/michelle-p-liao/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin style={{ fontSize: '1.3rem' }} />
          </a>
          &emsp;
          <a
            href="https://github.com/HinaLiao/catbnb-front"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub style={{ fontSize: '1.3rem' }} />
          </a>
          &emsp;
          <a
            href="https://www.instagram.com/juliasakakibara/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram style={{ fontSize: '1.3rem' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
