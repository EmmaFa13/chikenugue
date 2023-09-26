import React from 'react';
import '../css/footer1.css';
import img1 from '../images/logo.png'; 

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={img1} alt="Logo de la empresa" />
          </div>
          <div className="footer-social">
            <h4>REDES SOCIALES</h4>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.youtube.com/">YouTube</a>
          </div>
          <div className="footer-contacts">
            <h4>Contactos:</h4>
            <p>Email: info@example.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div className="footer-faq">
            <a href="/preguntas-frecuentes">Preguntas Frecuentes</a>
          </div>
          <div className="footer-terms">
            <a href="/terminos-y-servicios">Términos y Servicios</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;