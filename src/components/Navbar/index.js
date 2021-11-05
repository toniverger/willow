import React from 'react';
import './style.css';
const Navbar = () => {
    return (
        <div className="navbar">
        <p>LOGO WILLOW</p>
        <div>
            <a href="/">INICIO</a>
            <a href="/servicios">SERVICIOS</a>
            <a href="/postulaciones">QUIERO SER PARTE</a>
            <a href="/contacto">CONTACTO</a>
        </div>
        </div>
    )
}

export default Navbar;