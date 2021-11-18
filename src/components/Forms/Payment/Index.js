import React, { useState } from "react";
import './style.css';


const FormPayment = ({ category }) => {
    const [payment, setPayment] = useState("Contado");

    const handleChange = (e) => {
        setPayment(e.target.value);
    }

    const mPagoLink = category === "auto" ? "https://mpago.la/1M4W6ub" : "https://mpago.la/1QHsxzg";

    return (
        <div>
            <form target="_blank" action="https://formsubmit.co/f8030c14c50567dc44682240085b1761" method="POST">
                <input type="hidden" name="_subject" value="Willow, alguien ha comprado un servicio!" />
                <input type="hidden" name="_cc" value="info@willow.com.uy" />
                <input type="hidden" name="_template" value="table"></input>
                <input type="hidden" name="_captcha" value="false" />
                { payment === "Contado" ? <input type="hidden" name="_next" value="https://willow-git-dev-toniverger.vercel.app/gracias-compra"></input> : <input type="hidden" name="_next" value={mPagoLink}></input> } 
                <input className="input-service" name="Nombre" placeholder="Nombre Completo" type="text" required></input>
                <input className="input-service" name="Marca" placeholder="Marca" type="text" required></input>
                <input className="input-service" name="Color" placeholder="Color" type="text" required></input>
                <input className="input-service" name="Matrícula" placeholder="Matrícula" type="text" required></input>
                <textarea className="textarea-service" name="Ubicación" placeholder="Ubicación: Lo más detallada posible." required></textarea>
                <div className="payment-options">
                    <p>Forma de pago </p>
                    <label>Al contado </label>
                    <input className="inputRadio" onChange={(e) => handleChange(e)} type="radio" name="Forma de pago" value="Contado" required></input>
                    <label>Mercado Pago</label>
                    <input className="inputRadio" onChange={(e) => handleChange(e)} type="radio" name="Forma de pago" value="Mercado Pago" required></input>
                </div>
                {
                    (payment === "Contado") ? <button type="submit"  className="btn-blue">FINALIZAR</button> : <button type="submit" className="btn-blue">FINALIZAR EN MERCADO PAGO</button>
                }
            </form>
        </div>
    )
}
export default FormPayment;