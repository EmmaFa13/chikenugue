import React from 'react';
function Orden() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Logo" className="logo-img" />
          <span className="logo-text">Tu Tienda</span>
        </div>
      </header>

      <div className="App-header">
        <div className="menu-container">
          <h2>Menú</h2>
        </div>

        <button className="order-button">Ordenar</button>
      </div>
    </div>
  );
}

export default Orden;
