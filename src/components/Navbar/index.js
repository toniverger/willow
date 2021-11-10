import React from 'react';
import './style.css';

import Logo from '../../assets/img/cropped-logo-willow1h-ch.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
            <img src={Logo} alt="logo willow" />
            </Link>
        <div>
            <a className="link-nav" href="/">INICIO</a>
            <a className="link-nav" href="/servicios">SERVICIOS</a>
            <a className="link-nav" href="/postulaciones">QUIERO SER PARTE</a>
            <a className="link-nav" href="/contacto">CONTACTO</a>
        </div>
        </div>
    )
}

export default Navbar;