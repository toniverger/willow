import React from "react";
import FormContact from "../components/Forms/Contact/Index";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Index";
import "../styles/styles.css";

import WhatsappIcon from "../assets/img/WhatsApp.png";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="contact-titles">
          <h1 className="contact-subtitle">Contacto</h1>
          <p className="contact-text">
            Si precisas contactarte podes hacerlo en el siguiente formulario:
          </p>
        </div>
        <div className="contact-form">
          <FormContact />
        </div>
      </div>
      <a
        className="whatsapp-link"
        href="//api.whatsapp.com/send?phone=+59899658298&text=Hola, me gustaría contratar el servicio de Willow"
        target="_blank"
        rel="noreferrer"
      >
        <img className="whatsapp-icon" src={WhatsappIcon} alt="whatsapp icon" />
      </a>
      <Footer />
    </>
  );
};

export default Contact;
