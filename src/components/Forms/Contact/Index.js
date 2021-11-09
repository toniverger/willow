import React from "react";
import './style.css';

const FormContact = () => {
  return (
    <form className="form-contact">
      <div className="container-data">
        <div className="contact_in-col">
          <label>Nombre *</label>
          <input className="input" placeholder="" type="text"></input>
        </div>
        <div className="contact_in-col">
          <label>Apellido *</label>
          <input className="input" type="text"></input>
        </div>
      </div>
      <div className="container-data2">
        <div className="contact_in-col emails">
          <label>Correo electronico *</label>
          <input className="input_mail" type="text"></input>
        </div>
        <div className="contact_in-col">
          <label>Comentario o Mensaje *</label>
          <textarea placeholder="Dejanos tu mensaje."></textarea>
        </div>
      </div>
    </form>
  )
}

export default FormContact;