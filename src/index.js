import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './routes/home';
import Case from './routes/case';
import Patient from './routes/patient';
import Policy from './routes/policy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='policy' element={<Policy />} />
        <Route path='case' element={<Case />} />
        <Route path='patient' element={<Patient />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
