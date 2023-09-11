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
          <li><Link to="/ordenar">ORDENAR</Link></li>
          <li><Link to="/pedido">PEDIDO</Link></li>
          <li><Link to="./prueba">CONTACTO</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;