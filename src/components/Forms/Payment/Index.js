import React, { useState } from "react";
import './style.css';


const FormPayment = () => {
    const [payment, setPayment] = useState("contado");
    const [finish, setFinish] = useState(false);

    const handleChange = (e) => {
        setPayment(e.target.value);
    }

    const finishPurchase = (e) => {
        e.preventDefault();
        setFinish(true)
    }


    return (
        <div>
            <form onSubmit={(e) => finishPurchase(e)}>
                <input className="input-service" placeholder="Nombre Completo" type="text" required></input>
                <input className="input-service" placeholder="Marca" type="text" required></input>
                <input className="input-service" placeholder="Color" type="text" required></input>
                <input className="input-service" placeholder="Matrícula" type="text" required></input>
                <textarea className="textarea-service" placeholder="Ubicación: Lo más detallada posible." required></textarea>
                <div className="payment-options">
                    <p>Forma de pago </p>
                    <label>Al contado </label>
                    <input className="inputRadio" onChange={(e) => handleChange(e)} type="radio" name="metodo" value="contado" required></input>
                    <label>Mercado Pago</label>
                    <input className="inputRadio" onChange={(e) => handleChange(e)} type="radio" name="metodo" value="tarjeta" required></input>
                </div>
                {
                    (payment === "contado") ? <button type="submit"  className="btn-blue">FINALIZAR</button> : <button type="submit" className="btn-blue">FINALIZAR EN MERCADO PAGO</button>
                }
                {
                    (finish) && (
                        <p style={{ color: "green", width: "100%" }}>Gracias por preferir nuestro servicio, a la brevedad nos estaremos comunicando contigo!</p>)
                }
            </form>
        </div>
    )
}
export default FormPayment;