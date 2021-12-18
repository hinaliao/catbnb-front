import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './CreatePet.css';

import { createOnePet, getPets } from '../../../Api/api';

const petSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required field')
    .min(3, 'Minimum of 3 characters')
    .max(50, 'Maximum of 50 characters'),
  gender: yup
    .string()
    .required('Required field')
    .oneOf(['Macho', 'Femea'], 'Selecting the gender field is required'),
  castrated: yup.boolean().required('Required field'),
  age: yup
    .string()
    .oneOf(['Filhote', 'Adulto', 'Idoso'])
    .required('Required field'),
  vaccinated: yup.boolean().required('Required field'),
  observations: yup.string().max(150, 'Maximum of 150 characters'),
});

const CreatePet = ({ handleClose, setPets }) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setTouched,
    setValues,
  } = useFormik({
    initialValues: {
      name: '',
      gender: '',
      castrated: true,
      age: '',
      vaccinated: true,
      observations: '',
    },
    validationSchema: petSchema,
    onSubmit: async (formData) => {
      const token = localStorage.getItem('token');
      await createOnePet(formData, token);

      const cats = await getPets(token);
      setPets(cats);
      handleClearForm();
      handleClose();
    },
  });

  function handleClearForm() {
    setValues({ title: '', description: '' });
    setTouched({ title: false, description: false });
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Adicionar Gato</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              isValid={touched.name && !errors.name}
              isInvalid={touched.name && errors.name}
              placeholder="Digite o nome do seu pet"
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="div-pai">
            <div style={{ width: '40vw' }} className="div-gen">
              <Form.Label>Gênero</Form.Label>
              <Form.Select
                className="form-control"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.gender && !errors.gender}
                isInvalid={touched.gender && errors.gender}
              >
                <option>Selecione</option>
                <option value="Macho">Macho</option>
                <option value="Femea">Fêmea</option>
              </Form.Select>
            </div>
            <div style={{ width: '40vw' }}>
              <Form.Label>Idade</Form.Label>
              <Form.Select
                className="form-control"
                name="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.age && !errors.age}
                isInvalid={touched.age && errors.age}
              >
                <option>Selecione</option>
                <option value="Filhote">Filhote</option>
                <option value="Adulto">Adulto</option>
                <option value="Idoso">Idoso</option>
              </Form.Select>
            </div>
          </div>

          <div className="div-pai">
            <div style={{ width: '40vw' }} className="div-gen">
              <Form.Label>Vacinado</Form.Label>
              <Form.Select
                className="form-control"
                name="vaccinated"
                value={values.vaccinated}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.vaccinated && !errors.vaccinated}
                isInvalid={touched.vaccinated && errors.vaccinated}
              >
                <option>Selecione</option>
                <option value>Sim</option>
                <option value={false}>Não</option>
              </Form.Select>
            </div>
            <div style={{ width: '40vw' }}>
              <Form.Label>Castrado</Form.Label>
              <Form.Select
                className="form-control"
                name="castrated"
                value={values.castrated}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.castrated && !errors.castrated}
                isInvalid={touched.castrated && errors.castrated}
              >
                <option>Selecione</option>
                <option value>Sim</option>
                <option value={false}>Não</option>
              </Form.Select>
            </div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Observações</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="observations"
              value={values.observations}
              onChange={handleChange}
              // onBlur={handleBlur}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-btn" onClick={() => handleClose()}>
            Cancelar
          </Button>
          <Button type="submit" className="modal-btn">
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default CreatePet;
