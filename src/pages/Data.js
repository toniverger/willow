import React from "react";
import Footer from "../components/footer/Index";
import FormPayment from "../components/Forms/Payment/Index";
import Navbar from "../components/Navbar";

import WhatsappIcon from "../assets/img/WhatsApp.png"

const FormData = () => {
  const select = "Autos";
  const price = "250";
  return (
    <>
      <Navbar />
      <div className="data">
        <p className="data_title">Completa tus datos</p>
        <p>Has seleccionado la categoria: {select}</p>
        Total a pagar:
        <p className="text_price">{price}$</p>
        <FormPayment />
      </div>
      <a
        class="whatsapp-link"
        href="//api.whatsapp.com/send?phone=+59898795475&text=Hola, me gustaría contratar el servicio de Willow"
        target="_blank"
        rel="noreferrer"
      >
        <img class="whatsapp-icon" src={WhatsappIcon} alt="whatsapp icon" />
      </a>
      <Footer />
    </>
  );
};

export default FormData;
