import React from 'react';
import { Navigate } from 'react-router-dom';

const HostProtectedRoute = ({
  isLogged, Page, roleMatches, ...rest
}) => {
  return isLogged && roleMatches === 'Host' ? (
    <Page {...rest} />
  ) : (
    <Navigate to="/" />
  );
};

export default HostProtectedRoute;
