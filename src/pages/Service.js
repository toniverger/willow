import React from 'react';
import '../styles/styles.css'
import carBlue from '../assets/img/car-blue.PNG';
import Navbar from '../components/Navbar';

const Service = () => {
    return (
        <>
            <Navbar />
            <div className="service in-row">
                <div>
                    <img src={carBlue} alt="auto azul" />
                </div>
                <div>
                    <h className="subtitle">Lavado</h>
                    <p className="text-gray"> $200.00 - $250.00</p>
                    <p>Lavado exterior realizado con hidrolavadoras a presión de bajo consumo en agua, utilización de jabones biodegradables que no contaminan, ni rayan la pintura del vehiculo. Lavado totalmente amigable con el medio ambiente. </p>
                    <p className="text-gray">Tipo de vehículo</p>
                    <select name="cars" id="cars">
                        <option value="auto">Auto</option>
                        <option value="camioneta">Camioneta o SVU</option>
                    </select>
                    <p>Limpiar</p>
                    <button className="btn-blue"><a className="text-white" href="lavado">Completar Datos</a></button>
                </div>
            </div>
        </>
    )
}

export default Service;