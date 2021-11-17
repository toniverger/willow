import React, { useState } from "react";
import './style.css';

const FormWork = () => {
    const [answers, setAnswers] = useState({});

    const handleChangeInputs = (e) => {
        setAnswers({
            ...answers,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <>
            <form className="form-work">
                <div className="questions-work">
                    <label className="requiered">NOMBRE COMPLETO: <span>*</span>  </label>
                    <input name="name" value={answers.name} onChange={(e) => handleChangeInputs(e)} required className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">FECHA DE NACIMIENTO: <span>*</span>  </label>
                    <input name="date" value={answers.date} onChange={(e) => handleChangeInputs(e)} required className="input-work" type="text" placeholder="formato dd/mm/aaaa"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">ESTADO CIVIL: <span>*</span> </label>
                    <input name="civil" value={answers.civil} onChange={(e) => handleChangeInputs(e)} required className="input-work" type="text"></input>
                </div>
                <div className="questions-work_option">
                    <label className="label-option requiered">TIENES HIJOS:  <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="hijos" value="hijos" onChange={(e) => handleChangeInputs(e)} required className="inputRadio" type="radio"></input>
                        <label>Si</label>
                    </div>
                    <input className="inputRadio" type="radio" onChange={(e) => handleChangeInputs(e)} name="hijos" value="sin hijos"></input>
                    <label>No</label>
                </div>
                <div className="questions-work">
                    <label className="requiered">CORREO ELECTRÓNICO: <span>*</span> </label>
                    <input name="mail" value={answers.mail} onChange={(e) => handleChangeInputs(e)} required type="mail" className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">DEPARTAMENTO: <span>*</span></label>
                    <input name="department" value={answers.department} onChange={(e) => handleChangeInputs(e)} required type="text" className="input-work"></input>
                </div>
                <div className="questions-work">
                <label className="requiered">BARRIO: <span>*</span> </label>
                <input name="neighborhood" value={answers.neighborhood} onChange={(e) => handleChangeInputs(e)} required type="text" className="input-work"></input>
                </div>
                <div>
                    <label className="requiered">¿TÍENES CELULAR? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="telephone" value="celular" onChange={(e) => handleChangeInputs(e)} required className="inputRadio" type="radio"></input>
                        <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="telephone" value="sin celular" onChange={(e) => handleChangeInputs(e)} required className="inputRadio" type="radio"></input>
                        <label>No</label>
                    </div>
                </div>
                <div>
                    <label className="requiered label-work">¿ACCESO A INTERNET DESDE EL CELULAR? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="internet" value="internet" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="radio"></input>
                        <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="internet" value="sin internet" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="radio"></input>
                        <label>No</label>
                    </div>
                </div>
                <div>
                    <label>¿TIENE MONOTRIBUTO? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="monotributo" value="monotributo" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="radio"></input>
                        <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="monotributo" value="sin monotributo" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="radio"></input>
                        <label>No</label>
                    </div>
                </div>
                <div className="questions-work">
                    <label className="requiered">DISPONIBILIDAD HORARIA <span>*</span> </label>
                    <input name="time" value={answers.time} onChange={(e) => handleChangeInputs(e)} className="input-work"></input>
                </div>
                <div>
                    <label className="requiered label-work">¿QUERRÍA TRABAJAR FINES DE SEMANA? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="weekend1" value="saturday" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="checkbox"></input>
                        <label>Sábados</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="weekend2" value="sunday" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="checkbox"></input>
                        <label>Domingos</label>
                    </div>
                </div>
                <div>
                    <label className="requiered">¿PREFIERE 4 O 6 HORAS? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="timeWork" value="4 horas" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="checkbox"></input>
                        <label>4 Horas</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="timeWork" value="6 horas" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="checkbox"></input>
                        <label>6 Horas</label>
                    </div>
                </div>
                <div>
                    <label className="requiered">¿PREFIERE MAÑANA O TARDE? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="times" value="mañana" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="checkbox"></input>
                        <label>Mañana</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="times" value="tarde" handleChangeInputs={(e) => handleChangeInputs(e)} className="inputRadio" type="checkbox"></input>
                        <label>Tarde</label>
                    </div>
                </div>
                <div>
                    <label className="requiered">¿TIENE TRANSPORTE PROPIO? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="transport" value="moto" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="checkbox"></input>
                        <label>Moto</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="transport2" value="bici" onChange={(e) => handleChangeInputs(e)} className="inputRadio" type="checkbox"></input>
                        <label>Bici</label>
                    </div>
                </div>
                <div className="questions-work">
                <label className="requiered">¿LIBRETA DE MOTO? <span>*</span> </label>
                    <input name="moto" value={answers.moto} onChange={(e) => handleChangeInputs(e)} required className="input-work"></input>
                </div>
                <div>
                    <label className="requiered">FORMACIÓN: <span>*</span> </label>
                    <select className="select-work" key="0" name="study" value={answers.study} onChange={(e) => handleChangeInputs(e)} >
                        <option>Primaria incompleta</option>
                        <option>Primaria completa</option>
                        <option>Secundaria incompleta</option>
                        <option>Secundaria completa</option>
                    </select>
                </div>
                <div className="questions-work">
                    <label className="label-work">MENCIONE CURSOS QUE HAYA HECHO Y LE HAYAN GUSTADO: </label>
                    <input name="likes" value={answers.likes} onChange={(e) => handleChangeInputs(e)} required className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">INTERESES Y PREFERENCIAS: <span>*</span> </label>
                    <input name="preferences" value={answers.preferences} onChange={(e) => handleChangeInputs(e)} type="text" className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">HOBBIES: <span>*</span></label>
                    <input name="hobbies" value={answers.hobbies} onChange={(e) => handleChangeInputs(e)} className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label className="label-work">CONTANOS EN UN VIDEO ALGO MÁS DE VOS.</label>
                    <p className="label-work">Subí un video a Youtube, facebook, instagram. </p>
                    <input name="urlVideo" value={answers.urlVideo} onChange={(e) => handleChangeInputs(e)} type="text" className="input-work" placeholder="Pega aqui su link (No obligatorio)"></input>
                </div>
                <div className="questions-work">
                    <label>ACLARACIÓNES: </label>
                    <textarea name="mensagge" value={answers.mensagge} onChange={(e) => handleChangeInputs(e)} required className="textarea-work" placeholder="Aqui puede escribir alguna aclaración de la que quiera con respecto al formulario o a usted..."></textarea>
                </div>
                <div className="questions-work">
                    <button className="btn-submit_work" type="submit">ENVIAR</button>
                </div>
            </form>
        </>
    )
}

export default FormWork;
