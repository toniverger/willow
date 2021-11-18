import React from "react";
import { Link } from "react-router-dom";
import Willow from '../assets/img/cropped-logo-willow1h-ch.png';
import Footer from "../components/footer/Index";
import Navbar from "../components/Navbar";

const ThankYou = () => {
    return (
        <>
            <Navbar />
            <div className="congrats">
                <h1 className="congrats_title">Gracias por comunicarte con nosotros.!</h1>
                <p>Te responderemos a la brevedad.</p>
                <Link to="/">
                    <img src={Willow} alt="logo willow"></img>
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default ThankYou;
