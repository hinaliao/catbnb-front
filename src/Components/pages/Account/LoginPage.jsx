/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Form, Col, Button } from 'react-bootstrap';
import { BiLeftArrowAlt } from 'react-icons/bi';
import './LoginPage.css';

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
        localStorage.setItem('role', tokenResponse.role);

        loginUser(tokenResponse.role);

        navigate('/');
      } catch (error) {
        setErrors({
          email: error.response.data.error,
          password: error.response.data.error,
        });
      }
    },
  });

  const backArrow = (
    <BiLeftArrowAlt size="24px" onClick={() => navigate('/')} />
  );

  return (
    <div className="all-pai">
      <div className="flechinha">
        {backArrow}
        Voltar
      </div>
      <div className="all">
        <div className="login-img" />
        <div className="login-content">
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Col}
              md="12"
              controlId="formBasicEmail"
              className="login-form"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Coloque seu e-mail"
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

            <Form.Group
              as={Col}
              md="12"
              controlId="formBasicPassword"
              className="login-form"
            >
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Senha"
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
            <Button type="submit" className="login-btn">
              Login
            </Button>
          </Form>

          <h4>
            Ainda não é cadastrado?&ensp;
            <Link to="/register">Registre-se!</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
