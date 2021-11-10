import React from 'react';
import './style.css';

import Logo from '../../assets/img/cropped-logo-willow1h-ch.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
            <img className="logo-willow" src={Logo} alt="logo willow" />
            </Link>
        <div className="navbar_link">
            <a className="link-nav" href="/">INICIO</a>
            <a className="link-nav" href="/servicios">SERVICIOS</a>
            <a className="link-nav" href="/postulaciones">QUIERO SER PARTE</a>
            <a className="link-nav" href="/contacto">CONTACTO</a>
        </div>
        <div className="menu">
        <p>Menu</p>
        </div>
        </div>
    )
}

export default Navbar;