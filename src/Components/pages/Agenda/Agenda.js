/* eslint-disable react/jsx-filename-extension */
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { Card, Table } from 'react-bootstrap';
import React from 'react';
import './Agenda.css';

const Agenda = () => {
  return (
    <div>
      <Card className="card">
        <Card.Header>Meus agendamento</Card.Header>
        <Card.Body>
          <Card.Text>
            <Table striped bordered hover>
              Você ainda não tem fez nenhum agendamento.
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Agenda;
