import React from 'react';
import { Navigate } from 'react-router-dom';

const UserProtectedRoute = ({ isLogged, Page, ...rest }) => {
  return isLogged ? <Page {...rest} /> : <Navigate to="/" />;
};

export default UserProtectedRoute;
