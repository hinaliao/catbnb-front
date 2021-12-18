import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
// import { editUser } from '../../../Api/api';
import './UserProfile.css';

const EditUserProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Form>
        <Form.Group className="edit-profile-container">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="email" placeholder="Edite seu nome" />
        </Form.Group>
        <button
          className="edit-btn"
          onClick={() => navigate('/meu-perfil')}
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default EditUserProfile;
