import React, { useState, useEffect } from 'react';
import './HostAccordion.css';
import { Accordion, Card } from 'react-bootstrap';
import axios from 'axios';

const HostAccordion = () => {
  const [teamData, setTeamData] = useState([]);

  const nbaData = async () => {
    const response = await axios.get(
      'process.env.REACT_APP_CATBNB_API_URI/api/auth/reservation',
    );

    setTeamData(response.data.data);
  };

  const renderAccordion = (title, id) => {
    return (
      <Accordion key={id}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={title}>
            {title.city}
            {' '}
            <i>+</i>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={title}>
            <Card.Body>
              <ul>
                <li>{title.abbreviation}</li>
                <li>{title.city}</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  };

  useEffect(() => {
    nbaData();
  }, []);

  return <div className="App">{teamData.map(renderAccordion)}</div>;
};

export default HostAccordion;

// <Template>

//   <Dropdown>
//     <Dropdown.Toggle id="dropdown-basic">
//       Selecione aqui
//     </Dropdown.Toggle>
//     <Dropdown.Menu>
//       <Dropdown.Item href="#/action-1">Cat sitting</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">Hospedagem</Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>

// <Accordion className="accordion">

//     <Accordion.Item eventKey="0">
//       <Accordion.Header>
//         <div className="accordionheader">
//           <h3>Julia</h3>
//           <h6>Pinheiros, SP</h6>
//           <Badge bg="success">Disponível</Badge>
//           <Badge bg="primary">{project.title}</Badge>
//         </div>
//       </Accordion.Header>
//       <Accordion.Body>
//         <div className="div-sobre">
//           <h4>Sobre</h4>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </div>
//         <div>
//           <ul>
//             <h4>Habilidades</h4>
//             <li>Suporte 24h</li>
//             <li>Aplica injetáveis</li>
//             <li>Primeiros socorros veterinário</li>
//           </ul>
//         </div>
//       </Accordion.Body>
//     </Accordion.Item>
//   })
// </Accordion>

// </Template>
