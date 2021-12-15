import React from 'react';
import { Navigate } from 'react-router-dom';

const UserProtectedRoute = ({
  isLogged, Page, roleMatches, ...rest
}) => {
  return isLogged && roleMatches === 'Customer' ? <Page {...rest} /> : <Navigate to="/" />;
};

export default UserProtectedRoute;
