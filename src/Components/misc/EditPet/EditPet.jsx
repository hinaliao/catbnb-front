import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './EditPet.css';

import { editOneCat, getPets, removeOneCat } from '../../../Api/api';

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

const EditPet = ({ handleClose, setPets, selectedPet }) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: selectedPet.name || '',
      gender: selectedPet.gender || '',
      castrated: selectedPet.castrated,
      age: selectedPet.age || '',
      vaccinated: selectedPet.vaccinated,
      observations: selectedPet.observations || '',
    },
    validationSchema: petSchema,
    onSubmit: async (formData) => {
      const token = localStorage.getItem('token');
      await editOneCat(selectedPet._id, formData, token);

      const cats = await getPets(token);
      setPets(cats);
      handleClose();
    },
  });

  const handleDeletePet = async () => {
    const token = localStorage.getItem('token');
    await removeOneCat(selectedPet._id, token);
    const cats = await getPets(token);
    setPets(cats);
    handleClose();
  };

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
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-btn" onClick={handleDeletePet}>
            Deletar
          </Button>
          <Button type="submit" className="modal-btn">
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default EditPet;
