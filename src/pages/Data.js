import React from 'react';
import Footer from '../components/footer/Index';
import FormPayment from '../components/Forms/Payment/Index';
import Navbar from '../components/Navbar';


const FormData = () => {
    const select = "Autos"
    const price = "250"
    return (
        <>
            <Navbar />
            <div className="data">
                <p className="data_title">Completa tus datos</p>
                <p>Has seleccionado la categoria:  {select}</p>
                Total a pagar:
                <p className="text_price">{price}$</p>
                <FormPayment />
            </div>
            <Footer />
        </>
    )
}

export default FormData;
