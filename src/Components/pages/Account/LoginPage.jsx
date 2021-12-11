/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Form, Col, Button } from 'react-bootstrap';

import { login } from '../../../Api/api';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Required Field')
    .email('Must have email format'),
  password: yup
    .string()
    .required('Required Field')
    .max(100, 'Maximum of 100 characters'),
});

const Login = ({ loginUser }) => {
  const navigate = useNavigate();

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setErrors,
  } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async (formData) => {
      try {
        const tokenResponse = await login(formData);

        localStorage.setItem('token', tokenResponse.token);

        loginUser();

        navigate('/');
      } catch (error) {
        setErrors({
          email: error.response.data.error,
          password: error.response.data.error,
        });
      }
    },
  });

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} md="12" controlId="login-form">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={touched.email && !errors.email}
            isInvalid={touched.email && errors.email}
          />
          <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="login-form">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={touched.password && !errors.password}
            isInvalid={touched.password && errors.password}
          />
          <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" size="lg" className="login-submit-button">
          Login
        </Button>

        <h4>
          Ainda não é cadastrado?
          <a href="#">Registre-se!</a>
        </h4>
      </Form>
    </div>
  );
};

export default Login;
