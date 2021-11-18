import React from "react";
import './style.css';

const FormContact = () => {

  return (
    <form className="form-contact" action="https://formsubmit.co/xracer007@hotmail.com" method="POST">
      <input type="hidden" name="_template" value="table"></input>
      <input type="hidden" name="_cc" value="info@willow.com.uy" />
      <input type="hidden" name="_subject" value="Willow, alguien quiere ponerse en contacto contigo!"></input>
      <input type="hidden" name="_next" value="https://willow-git-dev-toniverger.vercel.app/gracias-contacto"></input>
      <input type="hidden" name="_captcha" value="false"></input>
      <div className="container-data">  
        <div className="contact_in-col">
          <label className="contact-required">NOMBRE <span>*</span></label>
          <input className="contact-input" type="text" name="Nombre" required></input>
        </div>
        <div className="contact_in-col">
          <label className="contact-required_lastName">APELLIDO <span>*</span></label>
          <input className="contact-input_lastName" type="text" name="Apellido" required></input>
        </div>
      </div>
      <div className="container-data2">
        <div className="contact_in-col emails">
          <label className="contact-required">CORREO ELECTRÓNICO <span>*</span></label>
          <input className="input_mail" type="email" name="Email"></input>
        </div>
        <div className="contact_in-col">
          <label className="contact-required">COMENTARIO O MENSAJE <span>*</span></label>
          <textarea className="contact-textarea" name="Mensaje" placeholder="Dejanos tu mensaje." required></textarea>
        </div>
        <div className="contact_in-col">
          <button className="btn-submit" type="submit">ENVIAR</button>
        </div>
      </div>
    </form>
  )
}

export default FormContact;