import React from 'react';
import FormPayment from '../components/Forms/Payment/Index';


const FormData = () => {
    const select = "Auto"
    const price = "250"
    return (
        <div>
            <p> Completa tus datos</p>
            <p>has seleccionado {select}</p>
            <p>{price}$</p>
            <FormPayment />
        </div>
    )
}

export default FormData;
