import React, { useState } from 'react';
import './style.css';

import Logo from '../../assets/img/cropped-logo-willow1h-ch.png';
import { Link } from 'react-router-dom';
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
                <a className="link-nav" href="/">INICIO</a>
                <a className="link-nav" href="/servicios">SERVICIOS</a>
                <a className="link-nav" href="/postulaciones">QUIERO SER PARTE</a>
                <a className="link-nav" href="/contacto">CONTACTO</a>
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