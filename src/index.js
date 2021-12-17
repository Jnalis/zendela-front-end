import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import Register from './components/Register';
// import Login from './components/Login';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Register />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
