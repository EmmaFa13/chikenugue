import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logopollo.png" alt="Logo" />
        <span className="logo-text">CHIKENUGUE</span>
      </div>
      <nav>
        
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/Order">ORDENAR</Link></li>
          <li><Link to="/pedido">PEDIDO</Link></li>
          <li><Link to="./prueba">INICIAR SESION</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;