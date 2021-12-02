import React, { useState } from "react";
import './style.css';


const FormPayment = (priceData) => {
    const [payment, setPayment] = useState("contado");

    const handleChange = (e) => {
        setPayment(e.target.value);
    }

    return (
        <div className="content-form_payment">
            <form action="https://formsubmit.co/xracer007@hotmail.com" method="POST">
                <input type="hidden" name="_template" value="table"></input>
                <input type="hidden" name="_subject" value="Willow, han comprado un lavado!"></input>
                <input type="hidden" name="_next" value={
                    (payment === "contado") ? (
                        "https://www.willow.com.uy/gracias-compras"
                    ) : (
                        (priceData.priceData === 300) ? ("https://mpago.la/1M4W6ub") : ("https://mpago.la/1QHsxzg")
                    )}>
                </input>
                <input type="hidden" name="_cc" value="info@willow.com"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input className="input-service" placeholder="Nombre Completo" type="text" name="Nombre" required></input>
                <input className="input-service" placeholder="Marca" type="text" name="Marca" required></input>
                <input className="input-service" placeholder="Color" type="text" name="Color" required></input>
                <input className="input-service" placeholder="Matrícula" type="text" name="Matrícula" required></input>
                <textarea className="textarea-service" placeholder="Ubicación: Lo más detallada posible." name="Ubicación" required></textarea>
                <div className="payment-options">
                    <p>Forma de pago </p>
                    <label>Al contado </label>
                    <input className="inputRadio" onChange={(e) => handleChange(e)} type="radio" name="metodo" value="contado" required></input>
                    <label>Mercado Pago</label>
                    <input className="inputRadio" onChange={(e) => handleChange(e)} type="radio" name="metodo" value="tarjeta" required></input>
                </div>
                {
                    (payment === "contado") ? <button type="submit" className="btn-blue">FINALIZAR</button> : <button type="submit" className="btn-blue">FINALIZAR EN MERCADO PAGO</button>
                }
            </form>
        </div>
    )
}
export default FormPayment;