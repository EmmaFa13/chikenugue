import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Orden from './ordenar';
import Banner from './banner';
import Contacto from './prueba';
import Pedido from './pedido';
export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="/prueba" element={<Contacto />} />
      <Route path="/ordenar" element={<Orden />} />
      <Route path="/pedido" element={<Pedido />} />
    </Routes>
    </BrowserRouter>
  );
};