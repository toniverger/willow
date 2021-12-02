import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Index";
import Navbar from "../components/Navbar";
import Willow from '../assets/img/cropped-logo-willow1h-ch.png';

const ThankForPurchase = () => {
    return (
        <>
            <Navbar />
            <div className="congrats">
                <h1 className="congrats_title">¡Gracias por comprar nuestros servicios!</h1>
                <p className="congrats_text">Nos comunicaremos a la brevedad.</p>
                <Link to="/">
                    <img src={Willow} alt="logo willow"></img>
                </Link>
            </div>
            <Footer />
        </>

    )
}

export default ThankForPurchase;