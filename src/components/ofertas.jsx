import React from 'react';
import img1 from '../images/polloOf.jpg';   
const Ofertas = () => {
  return (
    <div className="ofertas-container">
      <h2>Ofertas</h2>
      <div className="ofertas-images">
        <img src={img1} alt="Imagen 1"/>
        <img src={img1} alt="Oferta 2" />
        <img src={img1} alt="Oferta 3" />
      </div>
    </div>
  );
};

export default Ofertas;