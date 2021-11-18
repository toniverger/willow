import React from "react";
import './style.css';

const FormContact = () => {

  return (
    <form className="form-contact" action="https://formsubmit.co/03578cdb8b2903d06d30c6edb8aa3c78" method="POST">
      <input type="hidden" name="_template" value="table"></input>
      <input type="hidden" name="_subject" value="Willow, alguien se quiere poner en contacto!"></input>
      <input type="hidden" name="_next" value="http://localhost:3000/gracias"></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <div className="container-data">
        <div className="contact_in-col">
          <label className="requiered">NOMBRE <span>*</span></label>
          <input className="input" type="text" name="Nombre" required></input>
        </div>
        <div className="contact_in-col">
          <label className="requiered">APELLIDO <span>*</span></label>
          <input className="input" type="text" name="Apellido" required></input>
        </div>
      </div>
      <div className="container-data2">
        <div className="contact_in-col emails">
          <label className="requiered">CORREO ELECTRÓNICO <span>*</span></label>
          <input className="input_mail" type="email" name="Email"></input>
        </div>
        <div className="contact_in-col">
          <label className="requiered">COMENTARIO O MENSAJE <span>*</span></label>
          <textarea name="Mensaje" placeholder="Dejanos tu mensaje." required></textarea>
        </div>
        <div className="contact_in-col">
          <button className="btn-submit" type="submit">ENVIAR</button>
        </div>
      </div>
    </form>
  )
}

export default FormContact;