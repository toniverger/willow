import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

import './App.css';
import Index from './pages/Index';
import Service from './pages/Service';


const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/servicio" element={<Service />} />
      <Route path="/" element={<Index />} />
    </Routes>
  </Router>
  );
}

export default App;
