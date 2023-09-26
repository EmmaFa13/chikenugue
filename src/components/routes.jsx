import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Orden from './ordenar';
import Banner from './banner';
import Contacto from './prueba';
import Order from '../Order'
export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Banner />} />
      <Route path="prueba/" element={<Contacto />} />
      <Route path="Order/" element={<Order />} />
    </Routes>
  );
};