import React from "react";
import './style.css';

const Menu = ({ open,  }) => {
    return (
        <menu open={open} className="Menu">
            {
                open && (
                    <div className="container-menu">
                        <a href="/"> Inicio </a>
                        <a href="/servicios"> Servicios </a>
                        <a href="/postulaciones">Quiero ser parte</a>
                        <a href="/contacto"> Contacto  </a>
                    </div>
                )
            }
        </menu>
    )
}

export default Menu;
