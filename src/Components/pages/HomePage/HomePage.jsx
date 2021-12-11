/* eslint-disable react/jsx-filename-extension */
// import CardHome from './CardHome/CardHome';
// import { Link } from 'react-router-dom';
import React from 'react';
import { Button } from 'react-bootstrap';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homePage">
      <section>
        <div>
          <h1>Cuidamos do seu pet</h1>
          <h3>Viaje tranquilo sabendo que seu pet vai estar sendo cuidado com muito amor </h3>
          <Button className="btn-agende" size="lg" active>Agende aqui</Button>
        </div>
        <div>
          <img className=".playincat-img" alt="imagem de gato brincando" />
        </div>
      </section>
      <section>
        <div>
          <h1>Atendemos em toda São Paulo</h1>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
