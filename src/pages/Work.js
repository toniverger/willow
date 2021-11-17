import React from "react";
import FormWork from "../components/Forms/Work/Index";
import Navbar from "../components/Navbar";

import WhatsappIcon from "../assets/img/WhatsApp.png"

const Work = () => {
  return (
    <div className="root-work">
      <Navbar />
      <div className="work">
        <div className="work_texts">
          <p className="subtitle">QUIERO SER PARTE</p>
          <p className="word_texts_p">
          Queremos conocerte mejor, te invitamos a completar tus datos en el siguiente formulario.
          </p>
        </div>
        <div className="work_form">
          <FormWork />
        </div>
      </div>
      <a
        class="whatsapp-link"
        href="//api.whatsapp.com/send?phone=+59898795475&text=Hola, me gustaría contratar el servicio de Willow"
        target="_blank"
        rel="noreferrer"
      >
        <img class="whatsapp-icon" src={WhatsappIcon} alt="whatsapp icon" />
      </a>
    </div>
  );
};
export default Work;
