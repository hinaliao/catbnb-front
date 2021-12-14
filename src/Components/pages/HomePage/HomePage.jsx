/* eslint-disable react/jsx-filename-extension */
// import CardHome from './CardHome/CardHome';
// import { Link } from 'react-router-dom';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homePage section1">
      <section>
        <Card className="card-home" style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title className="h1">Cuidamos do seu pet</Card.Title>
            <Card.Text className="h3">
              Viaje tranquilo sabendo que seu pet vai estar sendo cuidado com muito amor
            </Card.Text>
            <Card.Link href="#">
              <Button className="btn-agende">
                Agende aqui
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
        <div className="playincat-img cat-img" />
        <div className="orangecat-img cat-img" />
        <div className="bluecat-img cat-img" />
      </section>
      <section>
        <div>
          <Card className="card-home" style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title className="h1">Atendemos em toda São Paulo</Card.Title>
              <Card.Link href="#">
                <Button className="btn-agende">
                  clique aqui para mais informações
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
