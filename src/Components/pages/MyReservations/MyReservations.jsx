import React from 'react';
import './MyReservations.css';
import { Accordion, Badge, Button } from 'react-bootstrap';

const Services = () => {
  return (
    <Accordion className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="accordionheader">
            <h3>Julia</h3>
            <h6>Pinheiros, SP</h6>
            <Badge bg="success">Disponível</Badge>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="div-sobre">
            <h4>Sobre</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <ul>
              <h4>Habilidades</h4>
              <li>Suporte 24h</li>
              <li>Aplica injetáveis</li>
              <li>Primeiros socorros veterinário</li>
            </ul>
          </div>
          <Button className="btn-reserva">Reserve aqui</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Services;
