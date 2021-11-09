import React from 'react';
import FormContact from '../components/Forms/Contact/Index';
import Navbar from '../components/Navbar';
import '../styles/styles.css'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact">
                <div className="contact-titles">
                    <h className="contact-subtitle">Contacto</h>
                    <p className="contact-text">Si precisas contactarte podes hacerlo en el siguiente formulario:</p>
                </div>
                <div className="contact-form">
                    <FormContact />
                </div>
            </div>
        </>
    )
}

export default Contact;