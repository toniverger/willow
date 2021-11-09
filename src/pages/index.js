import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/styles.css'
import carBlue from '../assets/img/car-blue.PNG';
import background from '../assets/img/mancha1.png';
import carPink from '../assets/img/car-pink.PNG';
import carYellow from '../assets/img/auto3-600x466.png';
import peoples from '../assets/img/peoples.PNG';
const Index = () => {
    return (
        <div>
            <Navbar />
            <div className="content-one in-row">
                <div className="texts-left">
                    <p className="subtitle">Lavado de Autos en el Lugar que estacionaste.</p>
                    <p>Willow es totalmente amigable con el medio ambiente, por su bajo consumo en agua en el lavado y la utilización de jabones biodegradables que no contaminan, ni rayan la pintura del vehículo.</p>
                </div>
                <div className="img-car">
                    <img src={carBlue} alt="auto azul" />
                </div>
                <div className="img-background">
                    <img className="img-backgound" src={background} alt="mancha de agua azul" />
                </div>
            </div>
            <div className="content-two in-row center">
                <div className="img-car">
                    <img src={carPink} alt="auto rosa" />
                </div>
                <div className="texts-rigth">
                    <p className="subtitle">¿Estas en el trabajo y quieres aprovechar para que te lavemos el auto?</p>
                    <p>Estas en el trabajo o en tu casa y tienes que lavar tu auto? No pierdas tiempo y no te preocupes, con Willow podes hacer tu pedido online y se lava el auto sin moverlo del lugar.</p>
                    <button className="btn-blue"><a className="text-white" href="/servicios">SOLICITAR LAVADO</a></button>
                </div>
            </div>
            <div className="conten-three in-row center">
                <div className="texts paragraph_right">
                    <p className="subtitle">¿Quieres ser uno de nuestros lavadores?</p>
                    <p>Queremos conocerte mejor, te invitamos a completar tus datos en el siguiente boton. </p>
                    <button className="btn-blue"><a className="text-white" href="/postulaciones">QUIERO SER PARTE</a></button>
                </div>
                <div className="img-car yellow">
                    <img className="img-yellow" src={carYellow} alt="auto amarillo" />
                </div>
            </div>
            <div className="content-four in-row center">
                <img src={peoples} alt="personas" />
                <div className="texts">
                    <p className="subtitle">¿Presisas un lavado?</p>
                    <p className="subtitle">Indicanos donde esta tú auto</p>
                    <p>Te invitamos a completar tus datos a través del siguiente link </p>
                    <button className="btn-blue"> <a className="text-white" href="/servicios">SOLICITAR LAVADO</a> </button>
                </div>
            </div>

        </div>
    )
}

export default Index;










