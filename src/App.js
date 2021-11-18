import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

import './App.css';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Work from './pages/Work';
import FormData from './pages/Data';
import Index from './pages/Index';
import ThankYou from './pages/ThankYou';


const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/contacto" element={<Contact />} />
      <Route path="/postulaciones" element={<Work />} />
      <Route path="/lavado" element={<FormData />} />
      <Route path="/servicios" element={<Service />} />
      <Route path="/gracias" element={<ThankYou />} />
      <Route path="/" element={<Index />} />
    </Routes>
  </Router>
  );
}

export default App;
