import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/pages/Navbar/Navbar';
import Footer from './Components/pages/Footer/Footer';
import {
  Login,
  SignUp,
  HomePage,
  Services,
  ProtectedRoute,
} from './Components';
// import DateRangePicker from './Components/misc/DateRangePicker/DateRangePicker';

import './App.css';

const App = () => {
  const verifyLogin = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  // const verifyRole = () => {
  //   const role = localStorage.getItem('role');
  //   return !!role;
  // };

  const [isUserLogged, setIsUserLogged] = useState(verifyLogin());

  const loginUser = () => {
    setIsUserLogged(true);
  };

  // const [roleMatches, setRoleMatches] = useState(verifyRole());

  // const defineRole = () => {
  //   setRoleMatches(true);
  // };

  return (
    <div>
      <div id="body-container">
        <Navbar isUserLogged={isUserLogged} /* defineRole={defineRole} */ />
        <Routes>
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<Services />} />

          <Route
            path="/meus-agendamentos"
            element={(
              <ProtectedRoute
                isLogged={isUserLogged}
                /* defineRole={defineRole} */
                /* Page={Agenda} */
              />
            )}
          />
        </Routes>
        {/* <DateRangePicker /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
