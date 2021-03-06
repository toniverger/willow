import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

import './App.css';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Work from './pages/Work';
import FormData from './pages/Data';
import Index from './pages/Index';
import ThankYou from './pages/ThankYou';
import ThankForPurchase from './pages/ThankForPurchase';


const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/contacto" element={<Contact />} />
      <Route path="/postulaciones" element={<Work />} />
      <Route path="/lavado" element={<FormData />} />
      <Route path="/servicios" element={<Service />} />
      <Route path="/gracias-contacto" element={<ThankYou />} />
      <Route path="/gracias-compras" element={<ThankForPurchase />} />
      <Route path="/" element={<Index />} />
    </Routes>
  </Router>
  );
}

export default App;
