import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './components/banner';
import Header from './components/nav';
import Boton from './components/boton';
import Ofertas from './components/ofertas'
import {AppRoutes} from './components/routes';
import Pedido from './components/pedido';
import Login from './components/login';
import Orden from './components/ordenar';
import Footer from './components/footer';
import Carrusel from './components/carrusel';
import Footer1 from './components/footer1';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Banner />
        <Boton />
        <Ofertas />
      </div>
      <Footer1/>
    </BrowserRouter>
  );
}

export default App;
