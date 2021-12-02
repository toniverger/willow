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
                <input type="hidden" name="_next" value="https://www.willow.com.uy/gracias-compras"></input>
                <input type="hidden" name="_cc" value="info@willow.com"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input className="input-service" placeholder="Nombre Completo" type="text" name="Nombre"required></input>
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
                    (payment === "contado") ? <button type="submit" className="btn-blue">FINALIZAR</button> : <button type="submit" className="btn-blue">
                        <a href={(priceData.priceData === 200) ? "https://www.mercadopago.com.uy/checkout/v1/payment/redirect/bd5af251-3594-4b81-900d-9f36b04f02b9/payment-option-form/?preference-id=89445898-e584d9ae-8ef9-434b-963c-a29122e49d42&source=link&p=c0f659a7ea49f29830c5bf3bc38f1b9b#/" : "https://www.mercadopago.com.uy/checkout/v1/payment/redirect/b4f055c4-6462-40ad-9444-7c7a8a6e3798/payment-option-form/?source=link&preference-id=89445898-28946b93-dcaa-4093-abe1-6e1b06478bca&p=c0f659a7ea49f29830c5bf3bc38f1b9b#/"}>FINALIZAR EN MERCADO PAGO</a></button>
                }
            </form>
        </div>
    )
}
export default FormPayment;