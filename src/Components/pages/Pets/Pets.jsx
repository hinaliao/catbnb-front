import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
// import { getPets } from '../../../Api/api';
// import Toast from '../../misc/Toast/Toast';

import './Pets.css';

const Pets = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <div className="pets-container">
        {pets.map((pet) => (
          <Link
            className="project-card"
            key={pet._id}
            to={`/my-projects/${pet._id}`}
            data-toggle="modal"
            onClick={handleShow}
          >
            <p>{pet.name}</p>
          </Link>
        ))}
      </div>

      <Toast
        variant="warning"
        message="An error has occurred"
        show={show}
        setShow={setShow}
      /> */}

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
          <Button className="modal-btn" onClick={handleClose}>
            Deletar
          </Button>
          <Button className="modal-btn" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Pets;
