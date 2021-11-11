import React from "react";
import './style.css';

const departments = [
    "Artigas",
    "Canelones",
    "Cerro Largo",
    "Colonia",
    "Durazno",
    "Flores",
    "Florida",
    "Lavalleja",
    "Maldonado",
    "Montevideo",
    "Paysandú",
    "Río Negro",
    "Rivera",
    "Rocha",
    "Salto",
    "San José",
    "Soriano",
    "Tacuarembó",
    "Treinta y Tres",
];
const neighborhoods = [
    "Cerro",
    "Paso de la arena",
    "La boyada",
    "Prado",
    "La Teja",
    "Centro",
    "3 Ombues",
    "Peñarol",
    "Ciudad Vieja",
    "Colon",
    "Parque Rodo,"
]

const FormWork = () => {
    return (
        <>
            <form className="form-work">
                <div className="questions-work">
                    <label className="requiered">Nombre completo: <span>*</span>  </label>
                    <input required className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">Fecha de nacimiento: * </label>
                    <input required className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">Estado civil: *</label>
                    <input required className="input-work" type="text"></input>
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
                    <label>Correo electrónico: </label>
                    <input required type="mail" className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label>Departamento: </label>
                    <select
                    required
                        label="departamento"
                        className="select-work"
                    >
                        <option key="0" value="selected">
                            Seleccioná Departamento
                        </option>
                        {departments.map((department) => (
                            <option key={Math.random()} value={department}>
                                {department}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="questions-work">
                    <label className="requiered">Barrio: *</label>
                    <select
                        required
                        label="departamento"
                        className="select-work"
                    >
                        <option key="0" value="selected">
                            Seleccioná Barrio
                        </option>
                        {neighborhoods.map((neighborhood) => (
                            <option key={Math.random()} value={neighborhood}>
                                {neighborhood}
                            </option>
                        ))}
                    </select>
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
                <div>
                    <label className="label-work">¿Acceso a internet desde tu celular? </label>
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
                    <label className="label-work">¿Querría trabajar fines de semana?</label>
                    <div className="questions-checkbox">
                        <input className="inputRadio" type="checkbox"></input>
                        <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                        <input className="inputRadio" type="checkbox"></input>
                        <label>No</label>
                    </div>
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
                    <div className="questions-checkbox">
                        <input className="inputRadio" type="checkbox"></input>
                        <label>Tarde</label>
                    </div>
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
                    <input required className="input-work"></input>
                </div>
                <div>
                    <label>Formación:</label>
                    {/**primaria completa, secundaria */}
                </div>
                <div>
                    <label className="label-work">Mencione cursos que haya hecho y le hayan gustado: </label>
                    <input required className="input-work"></input>
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
                    <label className="label-work">Contanos en un video algo más de vos.</label>
                    <p className="label-work">Subí un video a Youtube, facebook, instagram. </p>
                    <input type="text" className="input-work" placeholder="Pega aqui su link (No obligatorio)"></input>
                </div>
                <div className="questions-work">
                    <label>Aclaraciónes: </label>
                    <textarea required className="textarea-work" placeholder="Aqui puede escribir alguna aclaración de la que quiera con respecto al formulario o a usted..."></textarea>
                </div>
                <div className="questions-work">
                    <label>Texto de una sola linea:</label>
                    <input required className="input-work"></input>
                </div>
                <div className="questions-work">
                    <button className="btn-submit_work" type="submit">ENVIAR</button>
                </div>
            </form>
        </>
    )
}

export default FormWork;