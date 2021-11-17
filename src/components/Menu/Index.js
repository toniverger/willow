import React from "react";
import { Link } from "react-router-dom";

import './style.css';

const Menu = ({ open,  }) => {
    return (
        <menu open={open} className="Menu">
            {
                open && (
                    <div className="container-menu">
                        <Link to="/"> Inicio </Link>
                        <Link to="/servicios"> Servicios </Link>
                        <Link to="/postulaciones">Quiero ser parte</Link>
                        <Link to="/contacto"> Contacto  </Link>
                    </div>
                )
            }
        </menu>
    )
}

export default Menu;
