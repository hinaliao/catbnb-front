/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

import {
  Card, Modal, Button, Form,
} from 'react-bootstrap';

import { getUser } from '../../../Api/api';

const UserProfile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  // const [pets, setPets] = useState([]);
  const [loggedOut, setLoggedOut] = useState(false);

  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const response = await getUser(token);
      setUser(response);
    };
    fetchData();
  }, []);

  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setLoggedOut(true);
  };

  if (loggedOut) {
    navigate('/', { replace: true });
  }

  return (
    <>
      <div>
        <Card style={{ width: '28vw' }} className="user-card">
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {user.email}
            </Card.Subtitle>
            <Card.Text>Gatitos</Card.Text>
            {/* <div className="pets-container">
              {pets.map((pet) => (
                <a
                  className="project-card"
                  href="#"
                  data-toggle="modal"
                  onClick={handleShow}
                >
                  <p>{pet.name}</p>
                </a>
              ))}
            </div> */}
            <div className="add-edit-catitos">
              <button type="button" onClick={handleShow}>
                + adicionar gato
              </button>
              <button type="button">editar perfil</button>
            </div>
          </Card.Body>
        </Card>
      </div>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Gato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleFormControlInput1">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="name" placeholder="Digite o nome do seu pet" />
          </Form.Group>
          <div className="div-pai">
            <div style={{ width: '40vw' }} className="div-gen">
              <Form.Label>Gênero</Form.Label>
              <Form.Select
                className="form-control"
                controlId="exampleFormControlInput1"
              >
                <option>Selecione</option>
                <option value="1">Macho</option>
                <option value="2">Fêmea</option>
              </Form.Select>
            </div>
            <div style={{ width: '40vw' }}>
              <Form.Label>Idade</Form.Label>
              <Form.Select
                className="form-control"
                controlId="exampleFormControlInput1"
              >
                <option>Selecione</option>
                <option value="1">Filhote</option>
                <option value="2">Adulto</option>
                <option value="3">Idoso</option>
              </Form.Select>
            </div>
          </div>

          <div className="div-pai">
            <div style={{ width: '40vw' }} className="div-gen">
              <Form.Label>Vacinado</Form.Label>
              <Form.Select
                className="form-control"
                controlId="exampleFormControlInput1"
              >
                <option>Selecione</option>
                <option value="1">Sim</option>
                <option value="2">Não</option>
              </Form.Select>
            </div>
            <div style={{ width: '40vw' }}>
              <Form.Label>Castrado</Form.Label>
              <Form.Select
                className="form-control"
                controlId="exampleFormControlInput1"
              >
                <option>Selecione</option>
                <option value="1">Sim</option>
                <option value="2">Não</option>
              </Form.Select>
            </div>
          </div>
          <Form.Group className="mb-3" controlId="exampleFormControlInput1">
            <Form.Label>Doenças</Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="FIV+"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="FELV+"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Não"
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Observações</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="modal-btn"
            onClick={() => {
              // deleteCatRegister();
              handleClose();
            }}
          >
            Deletar
          </Button>
          <Button className="modal-btn" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      <button type="button" onClick={() => logout()} className="logout-btn">
        Log out
      </button>
    </>
  );
};

export default UserProfile;
