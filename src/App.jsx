import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/misc/Navbar/Navbar';
import Footer from './Components/misc/Footer/Footer';
import {
  Login,
  SignUp,
  HomePage,
  Services,
  UserProfile,
  EditUserProfile,
  UserProtectedRoute,
  HostProtectedRoute,
} from './Components';
// import DateRangePicker from './Components/misc/DateRangePicker/DateRangePicker';

import './App.css';

const App = () => {
  const verifyLogin = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  const verifyRole = () => {
    const role = localStorage.getItem('role');
    return role;
  };

  const [isUserLogged, setIsUserLogged] = useState(verifyLogin());
  const [roleMatches, setRoleMatches] = useState(verifyRole());

  const loginUser = (role) => {
    setIsUserLogged(true);
    setRoleMatches(role);
  };

  return (
    <div>
      <div id="body-container">
        <Navbar isUserLogged={isUserLogged} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/servicos" element={<Services />} />

          <Route
            path="/meu-perfil"
            element={(
              <UserProtectedRoute
                isLogged={isUserLogged}
                roleMatches={roleMatches}
                Page={UserProfile}
              />
            )}
          />

          <Route
            path="/editar-perfil"
            element={(
              <UserProtectedRoute
                isLogged={isUserLogged}
                roleMatches={roleMatches}
                Page={EditUserProfile}
              />
            )}
          />

          <Route
            path="/meus-compromissos"
            element={(
              <UserProtectedRoute
                isLogged={isUserLogged}
                roleMatches={roleMatches}
                /* Page={Agenda} */
              />
            )}
          />

          <Route
            path="/agendamentos"
            element={(
              <HostProtectedRoute
                isLogged={isUserLogged}
                roleMatches={roleMatches}
                /* Page={Agenda} */
              />
            )}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
