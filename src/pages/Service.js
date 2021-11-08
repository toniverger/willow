import React, { useState } from 'react';
import '../styles/styles.css'
import carBlue from '../assets/img/car-blue.PNG';
import Navbar from '../components/Navbar';


const Service = () => {
    const [select, setSelect] = useState("auto");
    const [info, setInfo] = useState(false);

    const handleChange = (e) => {
        setSelect(e.target.value)
        setInfo(true)
    }

    const cleanInfo = () => {
        setInfo(false);
    }

    const auto = "200";
    const camioneta = "250";

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
                        <select onChange={(e) => handleChange(e)} className="select" name="select" id="select">
                            <option value="">Selecciónar</option>
                            <option value="auto">Auto</option>
                            <option value="camioneta">Camioneta o SVU</option>
                        </select>
                        <button className="btn-clean" onClick={cleanInfo}>Limpiar</button>
                    </div>
                    {
                        (info) && (
                            <div>
                                <p>Este precio tiene un descuento promociónal incluido.</p>
                                {
                                    (select === "auto") ? <p>${auto}.00</p> : <p>${camioneta}.00</p>
                                }
                            </div>
                        )
                    }
                    <button className="btn-blue"><a className="text-white" href="lavado">Completar Datos</a></button>
                </div>
            </div>
        </>
    )
}

export default Service;