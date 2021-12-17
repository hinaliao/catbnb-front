/* eslint-disable max-len */
/* eslint-disable no-console */
// import {
//   Accordion, Badge, Dropdown,
// } from 'react-bootstrap';
// import Template from '../../templates/Template/Template';
// import { getReservations } from '../../../Api/api';
import React, { useState, useEffect } from 'react';
import { Accordion, Badge } from 'react-bootstrap';
import { userGetReservations } from '../../../Api/api';
import './MyReservations.css';

const Services = () => {
  const [reservations, setReservations] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  const getReservationByTitle = async () => {
    const foundReservations = await userGetReservations(searchTitle);

    setReservations(foundReservations);
  };

  console.log(setSearchTitle);

  useEffect(() => {
    getReservationByTitle();
  }, [searchTitle]);

  return (
    <div>
      {
        reservations.map((project) => (

          <Accordion className="accordion">

            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="accordionheader">
                  <h3>Julia</h3>
                  <h6>Pinheiros, SP</h6>
                  <Badge bg="success">Disponível</Badge>
                  <Badge bg="primary">{project.title}</Badge>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="div-sobre">
                  <h4>Sobre</h4>
                  <p>
                    Tenho duas gatinhas muito fofinhas e bem brincalhonas. Tenho vários brinquedinhos e petiscos saudáveis que podem ajudar a incentivar uma vida mais saudável e animada do seu gatinho!
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
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>

        ))
      }
    </div>
  );
};

export default Services;
