import React from "react";
import img1 from "../images/polloOf.jpg";
function Pedido() {
  return (
    <div>
      <section className="section">
        <h2 className="pedido">PEDIDO</h2>
      </section>
      <div className="caja">
        <div className="caja1">
          <h4>pedido en camino</h4>
          <img src={img1} alt="pedido" className="imagen" />
          <p>pollo</p>
          <p>refresco</p>
          <p>complemento</p>
          <button className="order-button">cancelar</button>
        </div>
        <div className="caja1">
          <h4>pedido anterior</h4>
          <img src={img1} alt="pedido" className="imagen" />
          <p>refresco</p>
          <p>complemento</p>
          <p>10 pescuezos</p>
          <h4>pedido entregado</h4>
        </div>
        <div className="caja1">
          <h4>pedido anterior</h4>
          <img src={img1} alt="pedido" className="imagen" />
          <p>pollo</p>
          <p>refresco</p>
          <p>papas</p>
          <h4>pedido entregado</h4>
        </div>
      </div>
    </div>
  );
}
export default Pedido;
