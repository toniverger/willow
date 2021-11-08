import React, { useState } from "react";
import './style.css';


const FormPayment = () => {
    const [payment, setPayment] = useState("contado");
    const [finish, setFinish] = useState(false);

    const handleChange = (e) => {
        setPayment(e.target.value);
    }

    const finishPurchase = () => {
        completeDatas();
    }

    const completeDatas = () => {
        console.log("hacer verificacion");
        setFinish(true);
    }

    return (
        <div>
            <form>
                <input className="input" placeholder="Nombre Completo" type="text"></input>
                <input className="input" placeholder="Marca" type="text"></input>
                <input className="input" placeholder="Color" type="text"></input>
                <input className="input" placeholder="Matricula" type="text"></input>
                <textarea placeholder="Ubicación: Lo más detallada posible."></textarea>
                <div>
                    <p>Forma de pago </p>
                    <label>Al contado </label>
                    <input className="inputRadio" onChange={(e) => handleChange(e)} type="radio" name="metodo" value="contado"></input>
                    <label>Mercado Pago</label>
                    <input className="inputRadio" onChange={(e) => handleChange(e)} type="radio" name="metodo" value="tarjeta"></input>
                </div>
                {
                    (payment === "contado") ? <button type="button" onClick={finishPurchase} className="btn-blue">FINALIZAR</button> : <button className="btn-blue"><a className="text-white" href="#">FINALIZAR EN MERCADO PAGO</a></button>
                }
                {
                    (finish) && (
                        <p style={{ color: "green" }}>Gracias por comprar nuestro servicio, nos estaremos comunicando!</p>)
                }
            </form>
        </div>
    )
}
export default FormPayment;