import React from 'react';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Orden from './ordenar';
import Banner from './banner';
import Contacto from './prueba';
import Pedido from './pedido';
export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Router path="/" element={<Banner />} />
      <Router path="prueba" element={<Contacto />} />
      <Router path="ordenar" element={<Orden />} />
      <Router path="pedido" element={<Pedido />} />
    </Routes>
    </BrowserRouter>
  );
};