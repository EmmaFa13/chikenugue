import React from 'react';

const Boton = ({ label, onClick }) => {
  return (
    <div className="round-button-container">
      <button className="round-button" onClick={onClick}>
        <span>Hola</span>
      </button>
    </div>
  );
};

export default Boton;