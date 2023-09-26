import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './components/banner';
import Header from './components/nav';
import Boton from './components/boton';
import Ofertas from './components/ofertas'
import {AppRoutes} from './components/routes';
import Orden from './components/ordenar';
import Pedido from './components/pedido';
import Login from './components/login';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Orden />
      </div>
    </BrowserRouter>
  );
}

export default App;