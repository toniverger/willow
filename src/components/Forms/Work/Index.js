import React from "react";
import './style.css';

const FormWork = () => {
    return (
        <>
            <form className="form-work" action="https://formsubmit.co/03578cdb8b2903d06d30c6edb8aa3c78" method="POST">
                <input type="hidden" name="_template" value="table"></input>
                <input type="hidden" name="_subject" value="Willow, alguien quiere trabajar con ustedes!"></input>
                <input type="hidden" name="_next" value="http://localhost:3000/gracias-compras"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                {/*<input type="hidden" name="_cc" value="info@willow.com"> */}
                <div className="questions-work">
                    <label className="requiered">NOMBRE COMPLETO: <span>*</span>  </label>
                    <input name="Nombre" required className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">FECHA DE NACIMIENTO: <span>*</span>  </label>
                    <input name="Fecha de nacimiento" required className="input-work" type="text" placeholder="formato dd/mm/aaaa"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">ESTADO CIVIL: <span>*</span> </label>
                    <input name="Estado civil" required className="input-work" type="text"></input>
                </div>
                <div className="questions-work_option">
                    <label className="label-option requiered">TIENES HIJOS:  <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input type="radio" name="¿Tiene hijos?" value="Si"></input>
                        <label>Si</label>
                    </div>
                    <input type="radio" name="hijos" value="No"></input>
                    <label>No</label>
                </div>
                <div className="questions-work">
                    <label className="requiered">CORREO ELECTRÓNICO: <span>*</span> </label>
                    <input name="Email"  required type="mail" className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">DEPARTAMENTO: <span>*</span></label>
                    <input name="Departamento" required type="text" className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">BARRIO: <span>*</span> </label>
                    <input name="Barrio" required type="text" className="input-work"></input>
                </div>
                <div className="questions-work_option">
                    <label className="requiered">¿TÍENES CELULAR? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="Celular" value="Con celular" required type="radio"></input>
                        <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="Celular" value="sin celular" required type="radio"></input>
                        <label>No</label>
                    </div>
                </div>
                <div className="questions-work_option">
                    <label className="requiered label-work">¿ACCESO A INTERNET DESDE EL CELULAR? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="¿Acceso a internet?" value="internet" type="radio"></input>
                        <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="internet" value="sin internet" type="radio"></input>
                        <label>No</label>
                    </div>
                </div>
                <div className="questions-work_option">
                    <label>¿TIENE MONOTRIBUTO? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="monotributo" value="monotributo" type="radio"></input>
                        <label>Si</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="monotributo" value="sin monotributo" type="radio"></input>
                        <label>No</label>
                    </div>
                </div>
                <div className="questions-work">
                    <label className="requiered">DISPONIBILIDAD HORARIA <span>*</span> </label>
                    <input name="Disponibilidad horaria" className="input-work"></input>
                </div>
                <div className="questions-work_option">
                    <label className="requiered label-work">¿QUERRÍA TRABAJAR FINES DE SEMANA? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="weekend1" value="Sábados" type="checkbox"></input>
                        <label>Sábados</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="weekend2" value="Domingos" type="checkbox"></input>
                        <label>Domingos</label>
                    </div>
                </div>
                <div className="questions-work_option">
                    <label className="requiered">¿PREFIERE 4 O 6 HORAS? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="¿Prefiere 4 o 6 horas?" value="4 horas" type="checkbox"></input>
                        <label>4 Horas</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="timeWork" value="6 horas" type="checkbox"></input>
                        <label>6 Horas</label>
                    </div>
                </div>
                <div className="questions-work_option">
                    <label className="requiered">¿PREFIERE MAÑANA O TARDE? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="Prefiere trabajar de:" value="mañana" type="checkbox"></input>
                        <label>Mañana</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="times" value="tarde" type="checkbox"></input>
                        <label>Tarde</label>
                    </div>
                </div>
                <div className="questions-work_option">
                    <label className="requiered">¿TIENE TRANSPORTE PROPIO? <span>*</span> </label>
                    <div className="questions-checkbox">
                        <input name="Transporte Personal:" value="moto" type="checkbox"></input>
                        <label>Moto</label>
                    </div>
                    <div className="questions-checkbox">
                        <input name="transport2" value="bici" type="checkbox"></input>
                        <label>Bici</label>
                    </div>
                </div>
                <div className="questions-work">
                    <label className="requiered">¿LIBRETA DE MOTO? <span>*</span> </label>
                    <input name="Libreta de moto:" required className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">FORMACIÓN: <span>*</span> </label>
                    <select className="select-work" key="0" name="Formación" >
                        <option>Primaria incompleta</option>
                        <option>Primaria completa</option>
                        <option>Secundaria incompleta</option>
                        <option>Secundaria completa</option>
                    </select>
                </div>
                <div className="questions-work">
                    <label className="label-work">MENCIONE CURSOS QUE HAYA HECHO Y LE HAYAN GUSTADO: </label>
                    <input name="Cusos:" required className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">INTERESES Y PREFERENCIAS: <span>*</span> </label>
                    <input name="preferences"  type="text" className="input-work"></input>
                </div>
                <div className="questions-work">
                    <label className="requiered">HOBBIES: <span>*</span></label>
                    <input name="hobbies" className="input-work" type="text"></input>
                </div>
                <div className="questions-work">
                    <label className="label-work">CONTANOS EN UN VIDEO ALGO MÁS DE VOS.</label>
                    <label className="label-work">Subí un video a Youtube, facebook, instagram. </label>
                    <input name="Video" type="text" className="input-work" placeholder="Pega aqui su link (No obligatorio)"></input>
                </div>
                <div className="questions-work">
                    <label>ACLARACIÓNES: </label>
                    <textarea name="Mensaje" required className="textarea-work" placeholder="Aqui puede escribir alguna aclaración de la que quiera con respecto al formulario o a usted..."></textarea>
                </div>
                <div className="questions-work">
                    <button className="btn-submit_work" type="submit">ENVIAR</button>
                </div>
            </form>
        </>
    )
}

export default FormWork;
