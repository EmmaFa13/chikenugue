import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

function Footer () {

    return (
        <footer className="footer">
            <div className="preguntas">
                <h4>preguntas frecuentes</h4>
            </div>
            <div className="marco">
            <img src={logo} alt="no se encontro"/>
            <h3>CHIKENUGUE</h3>
            <h5>terminos y condiciones| &copy;2023 fasdatec</h5>
            </div>
            
            <nav className="nav">
            <h4> CHIKENUGUE contactanos</h4>
                <ul>
                <li><Link to="/">emanuel@gmail.com</Link></li>
                <li><Link to="/">marcosalbertorios97@gmail.com</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;