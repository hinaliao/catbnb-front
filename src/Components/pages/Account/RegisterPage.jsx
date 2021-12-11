/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Form, Col, Button } from 'react-bootstrap';
import { BiLeftArrowAlt } from 'react-icons/bi';
import './RegisterPage.css';

import { signup, login } from '../../../Api/api';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required Field')
    .min(3, 'Minimum of 3 characters')
    .max(100, 'Maximum of 100 characters'),
  email: yup
    .string()
    .required('Required Field')
    .email('Must have email format'),
  password: yup
    .string()
    .required('Required Field')
    .max(100, 'Maximum of 100 characters'),
});

const SignUp = () => {
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
    initialValues: { name: '', email: '', password: '' },
    validationSchema: registerSchema,
    onSubmit: async (formData) => {
      try {
        await signup(formData);

        const tokenResponse = await login({
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem('token', tokenResponse.token);

        navigate('/my-projects');
      } catch (error) {
        setErrors({
          email: error.response.data.error,
        });
      }
    },
  });

  const backArrow = (
    <BiLeftArrowAlt
      size="24px"
      onClick={() => navigate('/')}
    />
  );

  return (
    <div className="all-pai">
      <div className="flechinha">
        {backArrow}
        Voltar
      </div>
      <div className="all">
        <div className="signup-img" />
        <div className="signup-content">
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Col} md="12" controlId="signup-form">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.name && !errors.name}
                isInvalid={touched.name && errors.name}
              />
              <Form.Control.Feedback>Ok!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" controlId="signup-form">
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

            <Form.Group as={Col} md="12" controlId="signup-form">
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

            <Button type="submit" className="signup-btn">
              Cadastre-se
            </Button>

            <h4>
              Já possui uma conta?&ensp;
              <Link to="/login">Login</Link>
            </h4>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
