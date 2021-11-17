import React from "react";
import Footer from "../components/footer/Index";
import { useLocation } from 'react-router-dom'
import FormPayment from "../components/Forms/Payment/Index";
import Navbar from "../components/Navbar";

import WhatsappIcon from "../assets/img/WhatsApp.png"

const FormData = () => {
  const location = useLocation()
  const data = location.state

  return (
    <>
      <Navbar />
      <div className="data">
        <p className="data_title">Completa tus datos</p>
        <p>Has seleccionado la categoria: {data.category.toUpperCase()}</p>
        Total a pagar:
        <p className="text_price">$ {data.price}</p>
        <FormPayment />
      </div>
      <a
        className="whatsapp-link"
        href="//api.whatsapp.com/send?phone=+59898795475&text=Hola, me gustaría contratar el servicio de Willow"
        target="_blank"
        rel="noreferrer"
      >
        <img className="whatsapp-icon" src={WhatsappIcon} alt="whatsapp icon" />
      </a>
      <Footer />
    </>
  );
};

export default FormData;
