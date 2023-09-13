import React from 'react';


const Boton = ({ label, onClick }) => {
  return (
    <button className="round-button" onClick={onClick}>
      <span>Ordena ahora</span>
    </button>
  );
};

export default Boton;