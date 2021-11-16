import React, { useState } from "react";
import './style.css';

const FormContact = () => {
  const [infoMail, setInfoMail] = useState({});

  const submitMensagge = () => {
    console.log("verificar y enviar")
  }


  const information = (e) => {
    setInfoMail({
      ...infoMail,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form className="form-contact">
      <div className="container-data">
        <div className="contact_in-col">
          <label className="requiered">NOMBRE <span>*</span></label>
          <input name="name" value={infoMail.name} onChange={(e) => information(e)} required className="input" type="text"></input>
        </div>
        <div className="contact_in-col">
          <label className="requiered">APELLIDO <span>*</span></label>
          <input name="lastname" value={infoMail.lastname} className="input" type="text" onChange={(e) => information(e)} ></input>
        </div>
      </div>
      <div className="container-data2">
        <div className="contact_in-col emails">
          <label className="requiered">CORREO ELECTRÓNICO <span>*</span></label>
          <input name="mail" value={infoMail.mail} className="input_mail" type="text" onChange={(e) => information(e)} ></input>
        </div>
        <div className="contact_in-col">
          <label className="requiered">COMENTARIO O MENSAJE <span>*</span></label>
          <textarea name="mensagge" value={infoMail.mensagge} placeholder="Dejanos tu mensaje." onChange={(e) => information(e)} ></textarea>
        </div>
        <div className="contact_in-col">
          <button onClick={(e) => submitMensagge(e)} className="btn-submit" type="submit">ENVIAR</button>
        </div>
      </div>
    </form>
  )
}

export default FormContact;