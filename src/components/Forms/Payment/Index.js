import React from "react";
import './style.css';

const FormPayment = () => {
    return (
        <form>
            <input placeholder="Nombre Completo" type="text"></input>
            <input placeholder="Marca" type="text"></input>
            <input placeholder="Color" type="text"></input>
            <input placeholder="Matricula" type="text"></input>
            <textarea placeholder="Ubicación"></textarea>
            <div>
                <p>Forma de pago </p>
                <label>Al contado </label>
                <input type="checkbox"></input>
                <label>Mercado Pago</label>
                <input type="checkbox"></input>
            </div>
            <button className="btn-blue">FINALIZAR</button>
        </form>
    )
}
export default FormPayment;