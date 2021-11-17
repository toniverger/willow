import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/cropped-logo-willow1h-ch.png';
import Menu from '../Menu/Index';
import MenuIcon from '../../assets/img/menuIcon.png'

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
                <Link className="link-nav" to="/">INICIO</Link>
                <Link className="link-nav" to="/servicios">SERVICIOS</Link>
                <Link className="link-nav" to="/postulaciones">QUIERO SER PARTE</Link>
                <Link className="link-nav" to="/contacto">CONTACTO</Link>
            </div>
            <div className="menu">
                <div className="containerIconMenu">
                        <img className="icon" onClick={handleMenu} src={MenuIcon} alt="menu icon"/>
                </div>
                <Menu open={open} />
            </div>
        </div>
    )
}

export default Navbar;