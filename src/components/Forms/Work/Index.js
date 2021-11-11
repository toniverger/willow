import React from "react";
import './style.css';

const FormWork = () => {
    return (
        <>
            <form className="form-work">
                <div className="questions-work">
                    <label>Nombre completo: </label>
                    <input className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label>Fecha de nacimiento: </label>
                    <input className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label>Estado civil: </label>
                    <input className="input-work" type="text"></input>
                </div>
                <div>
                    <label>Tienes hijos: </label>
                    <label>Si</label>
                    <input className="inputRadio" type="radio"></input>
                    <label>No</label>
                    <input className="inputRadio" type="radio"></input>
                </div>
                <div className="questions-work">
                    <label>Correo electrónico: </label>
                    <input className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label>Departamento: </label>
                    <input className="select-work" placeholder="seleccionar departamento"></input>
                </div>
                <div className="questions-work">
                    <label>Barrio: </label>
                    <input className="select-work" type="text"></input>
                </div>
                <div>
                    <label>¿Tienes celular? </label>
                    <label>Si</label>
                    <input className="inputRadio" type="radio"></input>
                    <label>No</label>
                    <input className="inputRadio" type="radio"></input>
                </div>
                <div>
                    <label>¿Acceso a internet desde tu celular? </label>
                    <label>Si</label>
                    <input className="inputRadio" type="radio"></input>
                    <label>No</label>
                    <input className="inputRadio" type="radio"></input>
                </div> <div>
                    <label>¿Tiene mono tributo?</label>
                    <label>Si</label>
                    <input className="inputRadio" type="radio"></input>
                    <label>No</label>
                    <input className="inputRadio" type="radio"></input>
                </div> 
                <div className="questions-work">
                    <label>Disponibilidad horaria</label>
                    <input className="input-work"></input>
                </div>
                <div>
                    <label>¿Querría trabajar fines de semana?</label>
                    <label>Si</label>
                    <input className="inputRadio" type="checkbox"></input>
                    <label>No</label>
                    <input className="inputRadio" type="checkbox"></input>
                </div>
                <div>
                    <label>¿Prefiere 4 o 6 horas?</label>
                    <label>4 Horas</label>
                    <input className="inputRadio" type="checkbox"></input>
                    <label>6 Horas</label>
                    <input className="inputRadio" type="checkbox"></input>
                </div>
                <div>
                    <label>¿Prefiere mañana o tarde?</label>
                    <label>Mañana</label>
                    <input className="inputRadio" type="checkbox"></input>
                    <label>Tarde</label>
                    <input className="inputRadio" type="checkbox"></input>
                </div>
                <div>
                    <label>¿Tiene transporte propio?</label>
                    <label>Si</label>
                    <input className="inputRadio" type="checkbox"></input>
                    <label>No</label>
                    <input className="inputRadio" type="checkbox"></input>
                </div>
                <div className="questions-work">
                    <label>¿Libreta de moto?</label>
                    <input className="input-work"></input>
                </div>
                <div>
                    <label>Formación:</label>
                    {/**primaria completa, secundaria */}
                </div>
                <div>
                    <label>Mencione cursos que haya hecho y le hayan gustado: </label>
                    <input className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label>Intereses y preferencias: </label>
                    <input type="text" className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label>Hobbies: </label>
                    <input className="input-work" type="text"></input>
                </div>
                <div>
                    <label>Contanos en un video algo más de vos.</label>
                    <p>Subí un video a Youtube, facebook, instagram. </p>
                    <input type="text" className="input-work" placeholder="Pega aqui su link (No obligatorio)"></input>
                </div>
                <div className="questions-work">
                    <label>Aclaraciónes: </label>
                    <textarea className="textarea-work" placeholder="Aqui puede escribir alguna aclaración de la que quiera con respecto al formulario o a usted..."></textarea>
                </div>
                <div className="questions-work">
                    <label>Texto de una sola linea:</label>
                    <input className="input-work"></input>
                </div>
                <div className="questions-work">
                <button className="btn-submit_work" type="submit">ENVIAR</button>
                </div>
            </form>
        </>
    )
}

export default FormWork;