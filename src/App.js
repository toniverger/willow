import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

import './App.css';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Service from './pages/Service';
import Work from './pages/Work';


const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/contacto" element={<Contact />} />
      <Route path="/postulaciones" element={<Work />} />
      <Route path="/servicio" element={<Service />} />
      <Route path="/" element={<Index />} />
    </Routes>
  </Router>
  );
}

export default App;
