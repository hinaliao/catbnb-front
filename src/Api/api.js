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

export const getReservations = async (searchTitle, token) => {
  const response = await api.get(
    `/reservation?title=${searchTitle}`,
    setHeaders(token),
  );

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
