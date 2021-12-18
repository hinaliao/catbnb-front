/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

import {
  Card, Modal,
} from 'react-bootstrap';
import Agenda from '../Agenda/Agenda';

import ModalCreatePet from '../CreatePet/CreatePet';
import ModalEditPet from '../EditPet/EditPet';

import { getUser, getPets } from '../../../Api/api';

const UserProfile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [pets, setPets] = useState([]);
  const [user, setUser] = useState('');
  const [selectedPet, setSelectedPet] = useState({});
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const response = await getUser(token);
      const cats = await getPets(token);
      setUser(response);
      setPets(cats);
    };
    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleShow = () => setOpen(true);

  const handleCloseEdit = () => setOpenEdit(false);

  const handleShowEdit = () => setOpenEdit(true);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setLoggedOut(true);
  };

  if (loggedOut) {
    navigate('/', { replace: true });
  }

  return (
    <div className="container-user">
      <div className="card-btn-container">
        <div>
          <Card style={{ width: '28vw' }} className="user-card">
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {user.email}
              </Card.Subtitle>
              <Card.Text>Gatitos</Card.Text>
              <div className="pets-container">
                {pets.map((pet) => (
                  <a
                    className="pets-name"
                    type="button"
                    href="#"
                    key={pet._id}
                    data-toggle="modal"
                    onClick={() => {
                      setSelectedPet(pet);
                      handleShowEdit();
                    }}
                  >
                    <li>{pet.name}</li>
                  </a>
                ))}
              </div>
              <div className="add-edit-catitos">
                <button type="button" onClick={handleShow}>
                  + adicionar gato
                </button>
                <button type="button" onClick={() => navigate('/editar-perfil')}>
                  editar perfil
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <Modal show={open} onHide={handleClose}>
          <ModalCreatePet handleClose={handleClose} setPets={setPets} />
        </Modal>

        {openEdit && (
        <Modal show onHide={handleCloseEdit}>
          <ModalEditPet
            handleClose={handleCloseEdit}
            setPets={setPets}
            selectedPet={selectedPet}
          />
        </Modal>
        )}
        <button type="button" onClick={() => logout()} className="logout-btn">
          Log out
        </button>
      </div>
      <Agenda />
    </div>
  );
};

export default UserProfile;
