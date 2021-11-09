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
          <label>Correo electrónico *</label>
          <input className="input_mail" type="text"></input>
        </div>
        <div className="contact_in-col">
          <label>Comentario o Mensaje *</label>
          <textarea placeholder="Dejanos tu mensaje."></textarea>
        </div>
        <div className="contact_in-col">
          <button className="btn-submit" type="submit">enviar</button>
        </div>
      </div>
    </form>
  )
}

export default FormContact;