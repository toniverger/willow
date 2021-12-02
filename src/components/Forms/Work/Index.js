import React from "react";
import "./style.css";

const FormWork = () => {
  return (
    <>
      <form
        className="form-work"
        action="https://formsubmit.co/xracer007@hotmail.com"
        method="POST"
      >
        <input type="hidden" name="_template" value="table"></input>
        <input
          type="hidden"
          name="_subject"
          value="Willow, alguien quiere trabajar con ustedes!"
        ></input>
        <input
          type="hidden"
          name="_next"
          value="https://www.willow.com.uy/gracias-contacto"
        ></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_cc" value="info@willow.com"></input>
        <label className="requiered">
          NOMBRE COMPLETO: <span>*</span>{" "}
        </label>
        <input
          name="Nombre"
          required
          className="input-work"
          type="text"
        ></input>
        <label className="requiered">
          FECHA DE NACIMIENTO: <span>*</span>{" "}
        </label>
        <input
          name="Fecha de nacimiento"
          required
          className="input-work"
          type="text"
          placeholder="formato dd/mm/aaaa"
        ></input>
        <label className="requiered">
          ESTADO CIVIL: <span>*</span>{" "}
        </label>
        <input
          name="Estado civil"
          required
          className="input-work"
          type="text"
        ></input>
        <label className="requiered">
          TIENES HIJOS: <span>*</span>{" "}
        </label>
        <div className="questions-checkbox">
          <div>
            <input type="radio" name="¿Tiene hijos?" value="Si" required></input>
            <label>Si</label>
          </div>
          <div>
            <input type="radio" name="¿Tiene hijos?" value="No" required></input>
            <label>No</label>
          </div>
        </div>
        <label className="requiered">
          CORREO ELECTRÓNICO: <span>*</span>{" "}
        </label>
        <input name="Email" required type="mail" className="input-work"></input>
        <label className="requiered">
          DEPARTAMENTO: <span>*</span>
        </label>
        <input
          name="Departamento"
          required
          type="text"
          className="input-work"
        ></input>
        <label className="requiered">
          BARRIO: <span>*</span>{" "}
        </label>
        <input
          name="Barrio"
          required
          type="text"
          className="input-work"
        ></input>
        <label className="requiered">
          ¿TÍENES CELULAR? <span>*</span>{" "}
        </label>
        <div className="questions-checkbox">
          <div>
            <input
              name="¿Tiene Celular?"
              value="Si"
              required
              type="radio"
            ></input>
            <label>Si</label>
          </div>
          <div>
            <input
              name="¿Tiene Celular?"
              value="No"
              required
              type="radio"
            ></input>
            <label>No</label>
          </div>
        </div>
        <label className="requiered">
          ¿ACCESO A INTERNET DESDE EL CELULAR? <span>*</span>{" "}
        </label>
        <div className="questions-checkbox">
          <div>
            <input
              name="¿Teine acceso a internet?"
              value="Si"
              type="radio"
              required
            ></input>
            <label>Si</label>
          </div>
          <div>
            <input name="¿Teine acceso a internet?" value="No" type="radio" required></input>
            <label>No</label>
          </div>
        </div>
        <label className="requiered">
          ¿TIENE MONOTRIBUTO? <span>*</span>{" "}
        </label>
        <div className="questions-checkbox">
          <div>
            <input name="¿Teine monotributo?" value="Si" type="radio" required></input>
            <label>Si</label>
          </div>
          <div>
            <input
              name="¿Teine monotributo?"
              value="No"
              type="radio"
              required
            ></input>
            <label>No</label>
          </div>
        </div>
        <label className="requiered">
          DISPONIBILIDAD HORARIA <span>*</span>{" "}
        </label>
        <input name="Disponibilidad horaria" className="input-work" required></input>
        <label className="requiered label-work">
          ¿QUERRÍA TRABAJAR FINES DE SEMANA? <span>*</span>{" "}
        </label>
        <div className="questions-checkbox">
          <div>
            <input name="Dia de trabajo" value="Sábados" type="checkbox" ></input>
            <label>Sábados</label>
          </div>
          <div>
            <input name="Dia de trabajo" value="Domingos" type="checkbox" ></input>
            <label>Domingos</label>
          </div>
        </div>
        <label className="requiered">
          ¿PREFIERE 4 O 6 HORAS? <span>*</span>{" "}
        </label>
        <div className="questions-checkbox">
          <div>
            <input
              name="¿Prefierencia de hora?"
              value="4 horas"
              type="checkbox"
              
            ></input>
            <label>4 Horas</label>
          </div>
          <div>
            <input name="¿Prefierencia de hora?" value="6 horas" type="checkbox" ></input>
            <label>6 Horas</label>
          </div>
        </div>
        <label className="requiered">
          ¿PREFIERE MAÑANA O TARDE? <span>*</span>{" "}
        </label>
        <div className="questions-checkbox">
          <div>
            <input
              name="Turno"
              value="mañana"
              type="checkbox"
              
            ></input>
            <label>Mañana</label>
          </div>
          <div>
            <input name="Turno" value="tarde" type="checkbox" ></input>
            <label>Tarde</label>
          </div>
        </div>
        <label className="requiered">
          ¿TIENE TRANSPORTE PROPIO? <span>*</span>{" "}
        </label>
        <div className="questions-checkbox">
          <div>
            <input
              name="Transporte Personal:"
              value="moto"
              type="checkbox"
            ></input>
            <label>Moto</label>
          </div>
          <div>
            <input name="Transporte Personal:" value="bicicleta" type="checkbox"></input>
            <label>Bici</label>
          </div>
        </div>
        <label className="requiered">
          ¿LIBRETA DE MOTO?
        </label>
        <input name="Libreta de moto:" className="input-work"></input>
        <label className="requiered">
          FORMACIÓN: <span>*</span>{" "}
        </label>
        <select className="select-work" key="0" name="Formación" required>
          <option value="Primaria incompleta">Primaria incompleta</option>
          <option value="Primaria completa">Primaria completa</option>
          <option value="Secundaria incompleta">Secundaria incompleta</option>
          <option value="Secundaria completa">Secundaria completa</option>
        </select>
        <label className="requiered">
          MENCIONE CURSOS QUE HAYA HECHO Y LE HAYAN GUSTADO:{" "}
        </label>
        <input name="Cusos:" className="input-work"></input>
        <label className="requiered">
          INTERESES Y PREFERENCIAS: <span>*</span>{" "}
        </label>
        <input name="Intereses:" type="text" className="input-work" required></input>
        <label className="requiered">
          HOBBIES: <span>*</span>
        </label>
        <input name="Hobbies" className="input-work" type="text" required></input>
        <label className="requiered">
          CONTANOS EN UN VIDEO ALGO MÁS DE VOS.<br />
          Subí un video a Youtube, facebook, instagram.
        </label>
        <input
          name="Video"
          type="text"
          className="input-work"
          placeholder="Pega aqui su link (No obligatorio)"
        ></input>
        <label className="requiered label-work">ACLARACIÓNES: </label>
        <textarea
          name="Aclaraciones"
          className="textarea-work"
          placeholder="Aqui puede escribir alguna aclaración de la que quiera con respecto al formulario o a usted..."
        ></textarea>
        <label className="requiered label-work">ADJUNTAR CV: </label>
        <input type="file" className="input-work" name="CV" accept="image/*,.pdf,.doc,.docx"></input>
        <button className="btn-submit" type="submit">
          ENVIAR
        </button>
      </form>
    </>
  );
};

export default FormWork;
