import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { editUser } from '../../../Api/api';
import './EditUser.css';

const editUserSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required Field')
    .min(3, 'Minimum of 3 characters')
    .max(100, 'Maximum of 100 characters'),
  email: yup
    .string()
    .required('Required Field')
    .email('Must have email format'),
});

const EditUser = ({ user }) => {
  const navigate = useNavigate();

  const {
    values, touched, errors, handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues: { name: user.name, email: user.email },
    validationSchema: editUserSchema,
    onSubmit: async (formData) => {
      const token = localStorage.getItem('token');
      await editUser(formData, token);
      navigate('/meu-perfil');
    },
  });

  return (
    <Form onSubmit={handleSubmit} className="edit-profile-container">
      <Form.Group className="edit-form-input">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Edite seu nome"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          isValid={touched.name && !errors.name}
          isInvalid={touched.name && errors.name}
        />
      </Form.Group>

      <Form.Group className="edit-form-input">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Edite seu email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          isValid={touched.email && !errors.email}
          isInvalid={touched.email && errors.email}
        />
      </Form.Group>
      <button className="edit-btn" type="submit">
        Submit
      </button>
    </Form>
  );
};

export default EditUser;
