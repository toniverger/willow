import React from "react";
import FormWork from "../components/Forms/Work/Index";
import Navbar from "../components/Navbar";
import "../styles/styles.css";

import WhatsappIcon from "../assets/img/WhatsApp.png"
import Footer from "../components/footer/Index";

const Work = () => {
  return (
    <>
      <Navbar />
      <div className="work">
        <div className="work_texts">
          <p className="subtitle work_subtitle">Quiero ser parte</p>
          <p className="word_texts_p">
          Queremos conocerte mejor, te invitamos a completar tus datos en el siguiente formulario.
          </p>
        </div>
        <div className="work_form">
          <FormWork />
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
export default Work;
