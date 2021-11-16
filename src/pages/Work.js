import React from "react";
import FormWork from "../components/Forms/Work/Index";
import Navbar from "../components/Navbar";

import WhatsappIcon from "../assets/img/WhatsApp.png"

const Work = () => {
  return (
    <>
      <Navbar />
      <div className="work">
        <div className="work_texts">
          <p className="subtitle">QUIERO SER PARTE</p>
          <p className="wor_texts_p">
            Estas en el trabajo o en tu casa y tienes que lavar tu auto?, no
            pierdas tiempo y no te preocupes, con Willow podes hacer tu pedido
            online y se lava el auto sin necesidad de moverlo de su lugar.
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
    </>
  );
};
export default Work;
