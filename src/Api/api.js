import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_CATBNB_API_URI,
});

const verifyUnauthorizedError = (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/';
  }

  return Promise.reject(error);
};

api.interceptors.response
  .use((response) => response, verifyUnauthorizedError);

const setHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const signup = async (formData) => {
  const response = await api.post('/auth/register', formData);

  return response.data;
};

export const login = async (formData) => {
  const response = await api.post('/auth/login', formData);

  return response.data;
};

export const getHostsDays = async (userWeekDays) => {
  const response = await api.get(`/auth/${userWeekDays}`);
  return response.data;
};

export const getReservations = async (searchTitle, token) => {
  const response = await api.get(
    `/reservation?title=${searchTitle}`,
    setHeaders(token),
  );

  return response.data;
};

export const userGetReservations = async (searchTitle) => {
  const response = await api.get(`/auth/reservation?title=${searchTitle}`);

  return response.data;
};

export const getOneReservation = async (reservationId, token) => {
  const response = await api.get(`/reservation/${reservationId}`, setHeaders(token));

  return response.data;
};

export const createOneReservation = async (body, token) => {
  const response = await api.post('/reservation', body, setHeaders(token));

  return response.data;
};

export const createOneAgenda = async (reservationId, body, token) => {
  const response = await api.post(
    `/agenda/${reservationId}`,
    body,
    setHeaders(token),
  );

  return response.data;
};

export const getUser = async (token) => {
  const response = await api.get('/meu-perfil', setHeaders(token));

  return response.data;
};

export const editUser = async (body, token) => {
  const response = await api.put('/meu-perfil', body, setHeaders(token));

  return response.data;
};

export const deleteUser = async (token) => {
  const response = await api.delete('/meu-perfil', setHeaders(token));

  return response.data;
};

export const getPets = async (token) => {
  const response = await api.get('/pets', setHeaders(token));

  return response.data;
};

export const createOnePet = async (body, token) => {
  const response = await api.post(
    '/pets/registerNewPet',
    body,
    setHeaders(token),
  );

  return response.data;
};

export const editOneCat = async (petId, body, token) => {
  const response = await api.put(`/pets/${petId}`, body, setHeaders(token));

  return response.data;
};

export const removeOneCat = async (petId, token) => {
  const response = await api.delete(`/pets/${petId}`, setHeaders(token));

  return response.data;
};
