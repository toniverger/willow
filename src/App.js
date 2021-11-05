import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/index';
import './App.css';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" component={Home}></Route>
    </Routes>
  </Router>
  );
}

export default App;
