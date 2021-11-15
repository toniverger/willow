import React, { useState } from 'react';
import './style.css';

import Logo from '../../assets/img/cropped-logo-willow1h-ch.png';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Index';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prevState) => !prevState);
    };

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
            <div className="menu" onClick={handleMenu}>
                <Menu open={open} onClick={handleMenu} />
            </div>
        </div>
    )
}

export default Navbar;