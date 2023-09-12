import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Orden from './ordenar';
import Banner from './banner';
import Contacto from './prueba';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="/prueba" element={<Contacto />} />
      <Route path="/ordenar" element={<Orden />} />
    </Routes>
  );
};