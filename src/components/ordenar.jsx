import React from 'react';
import img1 from '../images/polloOf.jpg';
function Orden() {
  return (
    <div className="App-header">
      <div className="menu-container">
        <h2>Menú</h2>
        <div className="menu-row">
          <div className="platillo">
            <img src={img1} alt="Platillo 1" className="platillo-img" />
            <p className="platillo-text">Platillo 1</p>
            <input type="number" className="platillo-input" value="0" />
          </div>
          <div className="platillo">
            <img src={img1} alt="Platillo 2" className="platillo-img" />
            <p className="platillo-text">Platillo 2</p>
            <input type="number" className="platillo-input" value="0" />
          </div>
          <div className="platillo">
            <img src={img1} alt="Platillo 3" className="platillo-img" />
            <p className="platillo-text">Platillo 3</p>
            <input type="number" className="platillo-input" value="0" />
          </div>
        </div>

      </div>
      <button className="order-button">Ordenar</button>
    </div>
  );
}
export default Orden;