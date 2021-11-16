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
                    <label className="requiered">NOMBRE COMPLETO: <span>*</span>  </label>
                    <input required className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">FECHA DE NACIMIENTO: <span>*</span>  </label>
                    <input required className="input-work" type="text" placeholder="formato dd/mm/aaaa"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">ESTADO CIVIL: <span>*</span> </label>
                    <input required className="input-work" type="text"></input>
                </div>
                <div className="questions-work_option">
                    <label className="label-option">TIENES HIJOS:  <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input required className="inputRadio" type="radio"></input>
                        <label>Si</label>
                    </div>
                    <input className="inputRadio" type="radio"></input>
                    <label>No</label>
                </div>
                <div className="questions-work">
                    <label>CORREO ELECTRÓNICO: <span>*</span> </label>
                    <input required type="mail" className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label>DEPARTAMENTO: </label>
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
                    <label className="requiered">BARRIO: <span>*</span> </label>
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
                    <label>¿TÍENES CELULAR? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input required className="inputRadio" type="radio"></input>
                        <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                        <input required className="inputRadio" type="radio"></input>
                        <label>No</label>
                    </div>
                </div>
                <div>
                    <label className="label-work">¿ACCESO A INTERNET DESDE EL CELULARr? <span>*</span> </label>
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
                    <label>¿TIENE MONOTRIBUTO? <span>*</span> </label>
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
                    <label>DISPONIBILIDAD HORARIA <span>*</span> </label>
                    <input className="input-work"></input>
                </div>
                <div>
                    <label className="label-work">¿QUERRÍA TRABAJAR FINES DE SEMANA? <span>*</span> </label>
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
                    <label>¿PREFIERE 4 O 6 HORAS? <span>*</span> </label>
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
                    <label>¿PREFIERE MAÑANA O TARDE? <span>*</span> </label>
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
                    <label>¿TIENE TRANSPORTE PROPIO? <span>*</span> </label>
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
                    <label>¿LIBRETA DE MOTO? <span>*</span> </label>
                    <input required className="input-work"></input>
                </div>
                <div>
                    <label>FORMACIÓN: <span>*</span> </label>
                    <select className="select-work" key="0" value="selected">
                        <option>Primaria incompleta</option>
                        <option>Primaria completa</option>
                        <option>Secundaria incompleta</option>
                        <option>Secundaria completa</option>
                    </select>
                </div>
                <div className="questions-work">
                    <label className="label-work">MENCIONE CURSOS QUE HAYA HECHO Y LE HAYAN GUSTADO: </label>
                    <input required className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label>INTERESES Y PREFERENCIAS: <span>*</span> </label>
                    <input type="text" className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label>HOBBIES: <span>*</span> </label>
                    <input className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label className="label-work">CONTANOS EN UN VIDEO ALGO MÁS DE VOS.</label>
                    <p className="label-work">Subí un video a Youtube, facebook, instagram. </p>
                    <input type="text" className="input-work" placeholder="Pega aqui su link (No obligatorio)"></input>
                </div>
                <div className="questions-work">
                    <label>ACLARACIÓNES: </label>
                    <textarea required className="textarea-work" placeholder="Aqui puede escribir alguna aclaración de la que quiera con respecto al formulario o a usted..."></textarea>
                </div>
                <div className="questions-work">
                    <label>TEXTO DE UNA SOLA LINEA:</label>
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