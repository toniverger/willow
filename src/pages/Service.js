import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import carBlue from "../assets/img/car-blue.PNG";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Index";

import WhatsappIcon from "../assets/img/WhatsApp.png";

const Service = () => {
  const [selectVehicle, setSelectVehicle] = useState(null);
  const [viewSelect, setViewSelect] = useState(false);
  const [typeService, setTypeService] = useState(null);
  const [disableButton, setDisableButton] = useState(true);

  const handleChangeVehicle = (e) => {
    setSelectVehicle(e.target.value);
    setViewSelect(true);
  };
  const handleChangeService = () => {
    setTypeService(true);
    setDisableButton(false);
  };

  const cleanInfo = () => {
    setViewSelect(false);
    setSelectVehicle(null);
    setTypeService(null);
  };

  const auto = 200;
  const camioneta = 250;

  return (
    <>
      <Navbar />
      <div className="service in-row">
        <div className="service_left">
          <img className="car-blue" src={carBlue} alt="auto azul" />
        </div>
        <div className="service_right">
          <h1 className="service-subtitle">Lavado</h1>
          <p className="price"> $200.00 - $250.00</p>
          <p className="service_paragraph">
            Lavado exterior realizado con hidrolavadoras a presión de bajo
            consumo en agua, utilización de jabones biodegradables que no
            contaminan, ni rayan la pintura del vehiculo. Lavado totalmente
            amigable con el medio ambiente.{" "}
          </p>
          <div className="in-row type-transport">
            <p className="transport_type_p">Tipo de vehículo</p>
            <select
              onChange={(e) => handleChangeVehicle(e)}
              className="select"
              name="select"
              id="select"
            >
              <option value="seleccion">Selecciónar</option>
              <option value="auto">Auto</option>
              <option value="camioneta">Camioneta o SVU</option>
            </select>
            <button className="btn-clean" onClick={cleanInfo}>
              Limpiar
            </button>
          </div>
          {viewSelect && (
            <div>
              <div className="type-service">
                <p className="transport_type_p">Tipo de servicio </p>
                <select
                  onChange={(e) => handleChangeService(e)}
                  className="select"
                  name="select"
                  id="select"
                >
                  <option value="">Tipo de servicio</option>
                  <option value="auto">Lavado exterior</option>
                  <option disabled value="camioneta">
                    Lavado y aspirado (Próximamente)
                  </option>
                </select>
              </div>
              {typeService && (
                <>
                  <p>Este precio tiene un descuento promociónal incluido.</p>
                  {selectVehicle === "auto" ? (
                    <p className="price">${auto}.00</p>
                  ) : (
                    <p className="price">${camioneta}.00</p>
                  )}
                </>
              )}
            </div>
          )}
          <Link
            to={disableButton ? "#" : "/lavado"}
            state={{
              category: selectVehicle,
              price: selectVehicle === "auto" ? auto : camioneta
            }}
            className="data-link"
          >
            <button
              className={disableButton ? "btn-blue-disabled" : "btn-blue"}
            >
              <span>Completar Datos</span>
            </button>
          </Link>
        </div>
      </div>
      <a
        className="whatsapp-link"
        href="https://wa.me/59899658298?text=Hola,%20me%20gustaría%20contratar%20el%20servicio%20de%20Willow"
        target="_blank"
        rel="noreferrer"
      >
        <img className="whatsapp-icon" src={WhatsappIcon} alt="whatsapp icon" />
      </a>
      <Footer />
    </>
  );
};

export default Service;
