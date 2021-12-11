/* eslint-disable import/no-named-as-default */
import React /* { useState } */ from 'react';
// import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/pages/HomePage/Navbar/Navbar';
import Footer from './Components/pages/Footer/Footer';
import HomePage from './Components/pages/HomePage/HomePage';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
