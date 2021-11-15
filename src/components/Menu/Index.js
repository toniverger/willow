import React from "react";
import './style.css';

const Menu = ({ open, handleMenu }) => {
    return (
        <menu open={open} className="Menu">
            <div className="containerIconMenu">
                <button className="btn-menu" onKeyDown={handleMenu} onClick={handleMenu}>
                    Menu
                </button>
            </div>
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
