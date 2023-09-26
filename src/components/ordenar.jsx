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
    <div className="App-header">
      <div className="menu-container">
        <h2>Menú</h2>
        <div className="menu-row">
          <div className="platillo">
            <img src={img1} alt="Platillo 1" className="platillo-img" />
            <p className="platillo-text">Platillo 1</p>
            <input
              type="number"
              className="platillo-input"
              value={platillo1Cantidad}
              onChange={(e) => handleCantidadChange('platillo1', parseInt(e.target.value))}
            />
          </div>
          <div className="platillo">
            <img src={img1} alt="Platillo 2" className="platillo-img" />
            <p className="platillo-text">Platillo 2</p>
            <input
              type="number"
              className="platillo-input"
              value={platillo2Cantidad}
              onChange={(e) => handleCantidadChange('platillo2', parseInt(e.target.value))}
            />
          </div>
          <div className="platillo">
            <img src={img1} alt="Platillo 3" className="platillo-img" />
            <p className="platillo-text">Platillo 3</p>
            <input
              type="number"
              className="platillo-input"
              value={platillo3Cantidad}
              onChange={(e) => handleCantidadChange('platillo3', parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
      <button className="order-button">Ordenar</button>
    </div>
  );
}

export default Orden;