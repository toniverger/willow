import React, { useState } from "react";
import Footer from "../components/footer/Index";
import { useLocation } from 'react-router-dom'
import FormPayment from "../components/Forms/Payment/Index";
import Navbar from "../components/Navbar";

import WhatsappIcon from "../assets/img/WhatsApp.png"

const FormData = () => {
  const location = useLocation()
  const data = location.state

  const [priceData, SetPriceData] = useState(data.price);

  return (
    <>
      <Navbar />
      <div className="data">
        <p className="data_title">Completa tus datos</p>
        <p>Has seleccionado la categoria: {data.category.toUpperCase()}</p>
        Total a pagar:
        <p className="text_price">${data.price}</p>
        <FormPayment priceData={priceData} />
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

export default FormData;
