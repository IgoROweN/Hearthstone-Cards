import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Card from './Pages/Card';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cards" element={<Home />} />
        <Route path="/cards/:CardName" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
