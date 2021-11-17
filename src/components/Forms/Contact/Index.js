import React, { useState } from "react";
import './style.css';

const FormContact = () => {
  const [infoMail, setInfoMail] = useState({});

  const submitMensagge = (e) => {
    e.preventDefault();
    console.log("verificar y enviar")
  }


  const information = (e) => {
    setInfoMail({
      ...infoMail,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form className="form-contact" onSubmit={(e) => submitMensagge(e)}>
      <div className="container-data">
        <div className="contact_in-col">
          <label className="requiered">NOMBRE <span>*</span></label>
          <input name="name" value={infoMail.name} onChange={(e) => information(e)} required className="input" type="text"></input>
        </div>
        <div className="contact_in-col">
          <label className="requiered">APELLIDO <span>*</span></label>
          <input name="lastname" value={infoMail.lastname} className="input" type="text" onChange={(e) => information(e)}required></input>
        </div>
      </div>
      <div className="container-data2">
        <div className="contact_in-col emails">
          <label className="requiered">CORREO ELECTRÓNICO <span>*</span></label>
          <input name="mail" value={infoMail.mail} className="input_mail" type="text" onChange={(e) => information(e)} required></input>
        </div>
        <div className="contact_in-col">
          <label className="requiered">COMENTARIO O MENSAJE <span>*</span></label>
          <textarea name="mensagge" value={infoMail.mensagge} placeholder="Dejanos tu mensaje." onChange={(e) => information(e)} required></textarea>
        </div>
        <div className="contact_in-col">
          <button className="btn-submit" type="submit">ENVIAR</button>
        </div>
      </div>
    </form>
  )
}

export default FormContact;