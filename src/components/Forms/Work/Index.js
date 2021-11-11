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
                <div className="questions-work_option">
                    <label className="label-option">Tienes hijos: </label>
                <div className="questions-checkbox">
                    <input className="inputRadio" type="radio"></input>
                    <label>Si</label>
                    </div>
                    <input className="inputRadio" type="radio"></input>
                    <label>No</label>
                </div>
                <div className="questions-work">
                    <input className="input-work" type="text"></input>
                    <label>Correo electrónico: </label>
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
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="radio"></input>
                    <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="radio"></input>
                    <label>No</label>
                    </div>
                </div>
                <div className>
                    <label>¿Acceso a internet desde tu celular? </label>
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="radio"></input>
                    <label>Si</label>
               </div>
               <div className="questions-checkbox">
                    <input className="inputRadio" type="radio"></input>
                    <label>No</label>
                    </div>
                </div>
                <div>
                    <label>¿Tiene mono tributo?</label>
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="radio"></input>
                    <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="radio"></input>
                    <label>No</label>
                    </div>
                </div> 
                <div className="questions-work">
                    <label>Disponibilidad horaria</label>
                    <input className="input-work"></input>
                </div>
                <div>
                    <label>¿Querría trabajar fines de semana?</label>
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="checkbox"></input>
                    <label>Si</label>
                    </div>
                    <input className="inputRadio" type="checkbox"></input>
                    <label>No</label>
                </div>
                <div>
                    <label>¿Prefiere 4 o 6 horas?</label>
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="checkbox"></input>
                    <label>4 Horas</label>
                    </div>
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="checkbox"></input>
                    <label>6 Horas</label>
                </div>
                </div>
                <div>
                    <label>¿Prefiere mañana o tarde?</label>
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="checkbox"></input>
                    <label>Mañana</label>
                    </div>
                    <input className="inputRadio" type="checkbox"></input>
                    <label>Tarde</label>
                </div>
                <div>
                    <label>¿Tiene transporte propio?</label>
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="checkbox"></input>
                    <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                    <input className="inputRadio" type="checkbox"></input>
                    <label>No</label>
                </div>
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