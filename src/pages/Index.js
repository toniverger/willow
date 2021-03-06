import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import carBlue from "../assets/img/car-blue.PNG";
import background from "../assets/img/mancha1.png";
import carPink from "../assets/img/car-pink.PNG";
import carYellow from "../assets/img/auto3-600x466.png";
import peoples from "../assets/img/peoples.PNG";
import Footer from "../components/footer/Index";
import WhatsappIcon from "../assets/img/WhatsApp.png"

import "../styles/styles.css";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="img-background">
        <img
          className="background"
          src={background}
          alt="mancha de agua azul"
        />
      </div>
      <div className="home">
        <div className="content-one in-row">
          <div className="content-one_text texts-left">
            <p className="subtitle">
              Lavado de Autos en el lugar que estacionaste.
            </p>
            <p>
              Willow es totalmente amigable con el medio ambiente, por su bajo
              consumo en agua en el lavado y la utilización de jabones
              biodegradables que no contaminan, ni rayan la pintura del
              vehículo.
            </p>
          </div>
          <div className="img-car img-car-blue">
            <img className="img-draw" src={carBlue} alt="auto azul" />
          </div>
        </div>
        <div className="content-two in-row center">
          <div className="img-car">
            <img className="img-draw" src={carPink} alt="auto rosa" />
          </div>
          <div className="texts-rigth">
            <p className="subtitle">
              ¿Estas en el trabajo y quieres aprovechar para que te lavemos el
              auto?
            </p>
            <p>
              Estas en el trabajo o en tu casa y tienes que lavar tu auto? No
              pierdas tiempo y no te preocupes, con Willow podes hacer tu pedido
              online y se lava el auto sin moverlo del lugar.
            </p>
            <button className="btn-blue">
              <Link className="text-white" to="/servicios">
                SOLICITAR LAVADO
              </Link>
            </button>
          </div>
        </div>
        <div className="content-four in-row">
          <div className="texts">
            <p className="subtitle">¿Precisas un lavado?</p>
            <p className="subtitle2">Indicanos donde esta tú auto</p>
            <p>
              Te invitamos a completar tus datos a través del siguiente link.{" "}
            </p>
            <button className="btn-blue">
              {" "}
              <Link className="text-white" to="/servicios">
                SOLICITAR LAVADO
              </Link>{" "}
            </button>
          </div>
          <img className="img-draw" src={peoples} alt="personas" />
        </div>
        <div className="content-three in-row center">
          <div className="img-car yellow">
            <img
              className="img-yellow img-draw"
              src={carYellow}
              alt="auto amarillo"
            />
          </div>
          <div className="texts paragraph_right">
            <p className="subtitle">¿Quieres ser uno de nuestros lavadores?</p>
            <p>
              Queremos conocerte mejor, te invitamos a completar tus datos a través del siguiente link.{" "}
            </p>
            <button className="btn-blue">
              <Link className="text-white" to="/postulaciones">
                QUIERO SER PARTE
              </Link>
            </button>
          </div>
        </div>
      </div>
      <a className="whatsapp-link" href="https://wa.me/59899658298?text=Hola,%20me%20gustaría%20contratar%20el%20servicio%20de%20Willow" target="_blank" rel="noreferrer">
        <img className="whatsapp-icon" src={WhatsappIcon} alt="whatsapp icon" />
      </a>
      <Footer />
    </>
  );
};

export default Index;
