import React from 'react';
import img1 from '../images/logo.png';    
const Banner = () => {
  return (
    <div className="rectangle-container">
      <div className="images-container">
        <img src={img1} alt="Imagen 1" className="circle-image" />
        <img src="imagen2.jpg" alt="Imagen 2" className="circle-image" />
        <img src="imagen3.jpg" alt="Imagen 3" className="circle-image" />
      </div>
      <div className="text-overlay">
        LOS MEJORES POLLOS
      </div>
    </div>
  );
};

export default Banner;
