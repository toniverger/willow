import React from 'react';
import '../styles/styles.css'
import carBlue from '../assets/img/car-blue.PNG';
import Navbar from '../components/Navbar';

const Service = () => {
    return (
        <>
            <Navbar />
            <div className="service in-row">
                <div className="service_left">
                    <img src={carBlue} alt="auto azul" />
                </div>
                <div className="service_right">
                    <h className="subtitle">Lavado</h>
                    <p className="text-gray"> $200.00 - $250.00</p>
                    <p className="service_paragraph">Lavado exterior realizado con hidrolavadoras a presión de bajo consumo en agua, utilización de jabones biodegradables que no contaminan, ni rayan la pintura del vehiculo. Lavado totalmente amigable con el medio ambiente. </p>
                    <div className="in-row type-transport">
                        <p className="type-transport_type">Tipo de vehículo</p>
                        <select className="select" name="cars" id="cars">
                            <option value="auto">Auto</option>
                            <option value="camioneta">Camioneta o SVU</option>
                        </select>
                        <p className="text-clean">Limpiar</p>
                    </div>
                    <button className="btn-blue"><a className="text-white" href="lavado">Completar Datos</a></button>
                </div>
            </div>
        </>
    )
}

export default Service;