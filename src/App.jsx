import React /* { useState } */ from 'react';
// import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/pages/HomePage/Navbar/Navbar';
import Footer from './Components/pages/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
