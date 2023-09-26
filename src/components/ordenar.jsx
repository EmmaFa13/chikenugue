import React, { useState } from 'react';
import img1 from '../images/polloOf.jpg';

function Orden() {
  const [platillo1Cantidad, setPlatillo1Cantidad] = useState(0);
  const [platillo2Cantidad, setPlatillo2Cantidad] = useState(0);
  const [platillo3Cantidad, setPlatillo3Cantidad] = useState(0);

  const handleCantidadChange = (platillo, cantidad) => {
    switch (platillo) {
      case 'platillo1':
        setPlatillo1Cantidad(cantidad);
        break;
      case 'platillo2':
        setPlatillo2Cantidad(cantidad);
        break;
      case 'platillo3':
        setPlatillo3Cantidad(cantidad);
        break;
      default:
        break;
    }
  };

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
      </div>
      <button className="order-button">Ordenar</button>
    </div>
  );
}
export default Orden;