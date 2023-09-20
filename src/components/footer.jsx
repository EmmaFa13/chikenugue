import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="preguntas">
        <h4>preguntas frecuentes</h4>
      </div>
      <div className="marco">
        <img src={logo} alt="no se encontro" />
        <h3>CHIKENUGUE</h3>
        <h5>terminos y condiciones| &copy;2023 fasdatec</h5>
      </div>

      <div className="nav">
        <h4> CHIKENUGUE contactanos</h4>
        
          <SocialIcon className="y" url="https://twitter.com" />
          <SocialIcon className="y" url="https://facebook.com" />
          <SocialIcon  className="y"url="https://youtube.com" />
        </div>  
    </footer>
  );
}

export default Footer;
