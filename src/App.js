import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Signup from './auth/Signup';
import Home from './component/Home';
import Login from './auth/Login';
import Dashboard from './component/Dashboard';
import Auth from "./auth/Auth";
import { AddEmployee } from './component/AddEmployee';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="AddEmployee" element={<AddEmployee />} />
          <Route path="dashboard" element={<Auth><Dashboard /></Auth>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
