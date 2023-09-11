import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Banner from './banner';
import Contacto from './prueba';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="/prueba" element={<Contacto />} />
    </Routes>
  );
};