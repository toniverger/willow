import React, { useState } from 'react';
import '../styles/styles.css'
import carBlue from '../assets/img/car-blue.PNG';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Index';


const Service = () => {
    const [selectVehicle, setSelectVehicle] = useState("auto");
    const [viewSelect, setViewSelect] = useState(false);
    const [typeService, setTypeService] = useState(false);

    const handleChangeVehicle = (e) => {
        setSelectVehicle(e.target.value)
        setViewSelect(true)
    }
    const handleChangeService = () => {
        setTypeService(true);
    }

    const cleanInfo = () => {
        setViewSelect(false);
        setSelectVehicle(null)
        setTypeService(null)
    }

    const auto = "200";
    const camioneta = "250";

    return (
        <>
            <Navbar />
            <div className="service in-row">
                <div className="service_left">
                    <img className="car-blue" src={carBlue} alt="auto azul" />
                </div>
                <div className="service_right">
                    <h className="service-subtitle">Lavado</h>
                    <p className="price"> $200.00 - $250.00</p>
                    <p className="service_paragraph">Lavado exterior realizado con hidrolavadoras a presión de bajo consumo en agua, utilización de jabones biodegradables que no contaminan, ni rayan la pintura del vehiculo. Lavado totalmente amigable con el medio ambiente. </p>
                    <div className="in-row type-transport">
                        <p className="transport_type_p">Tipo de vehículo</p>
                        <select onChange={(e) => handleChangeVehicle(e)} className="select" name="select" id="select">
                            <option value="seleccion">Selecciónar</option>
                            <option value="auto">Auto</option>
                            <option value="camioneta">Camioneta o SVU</option>
                        </select>
                        <button className="btn-clean" onClick={cleanInfo}>Limpiar</button>
                    </div>
                    {
                        (viewSelect) && (
                            <div>
                                <div className="type-service">
                                    <p class="transport_type_p">Tipo de servicio </p>
                                    <select onChange={(e) => handleChangeService(e)} className="select" name="select" id="select">
                                        <option value="">Tipo de servicio</option>
                                        <option value="auto">Lavado exterior</option>
                                        <option disabled value="camioneta">Lavado y Apirado (Próximamente)</option>
                                    </select>
                                </div>
                                {
                                    (typeService) && (
                                        <>
                                            <p>Este precio tiene un descuento promociónal incluido.</p>
                                            {
                                                (selectVehicle === "auto") ? <p className="price">${auto}.00</p> : <p className="price">${camioneta}.00</p>
                                            }
                                        </>
                                    )
                                }
                            </div>
                        )
                    }
                    <button className="btn-blue"><a className="text-white" href="lavado">Completar Datos</a></button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Service;