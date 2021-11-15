import React from "react";
import './style.css';

const FormContact = () => {
  return (
    <form className="form-contact">
      <div className="container-data">
        <div className="contact_in-col">
          <label className="requiered">NOMBRE <span>*</span></label>
          <input required className="input" type="text"></input>
        </div>
        <div className="contact_in-col">
          <label className="requiered">APELLIDO <span>*</span></label>
          <input className="input" type="text"></input>
        </div>
      </div>
      <div className="container-data2">
        <div className="contact_in-col emails">
          <label className="requiered">CORREO ELECTRÓNICO <span>*</span></label>
          <input className="input_mail" type="text"></input>
        </div>
        <div className="contact_in-col">
          <label className="requiered">COMENTARIO O MENSAJE <span>*</span></label>
          <textarea placeholder="Dejanos tu mensaje."></textarea>
        </div>
        <div className="contact_in-col">
          <button className="btn-submit" type="submit">ENVIAR</button>
        </div>
      </div>
    </form>
  )
}

export default FormContact;