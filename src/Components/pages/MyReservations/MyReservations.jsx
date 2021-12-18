/* eslint-disable max-len */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Accordion, Badge } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import './MyReservations.css';
import { getHostsDays } from '../../../Api/api';
// import pt from 'date-fns/locale/pt';

// registerLocale('pt', pt);

const Services = () => {
  const [foundUsers, setFoundUsers] = useState([]);
  const [userWeekDays, setUserWeekDays] = useState();
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate.getDay());

  const getHosts = async () => {
    const foundReservations = await getHostsDays(userWeekDays);

    setFoundUsers(foundReservations);
  };

  console.log(setUserWeekDays);

  const handleChangeDate = (date) => {
    setStartDate(date);
    setUserWeekDays(date.getDay());
  };

  useEffect(() => {
    if (userWeekDays) {
      getHosts();
    }
  }, [userWeekDays]);

  return (
    <div className="container">
      <DatePicker className="datepicker" selected={startDate} onChange={handleChangeDate} />
      <div className="accordion-container">
        {

        foundUsers.map((host) => (

          <Accordion className="accordion">

            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="accordionheader">
                  <h3>{host.name}</h3>
                  <h6>{host.email}</h6>
                  <Badge bg="primary">{host.title}</Badge>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="div-sobre">
                  <h4>Sobre</h4>
                  <p>
                    {host.about}
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
    </div>
  );
};

export default Services;
