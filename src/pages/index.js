import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/styles.css'
import carBlue from '../assets/img/car-blue.PNG';
import background from '../assets/img/fondo.PNG';
import carPink from '../assets/img/car-pink.PNG';
import carYellow from '../assets/img/car-yellow.PNG';
import peoples from '../assets/img/peoples.PNG';
const Index = () => {
    return (
        <div>
            <Navbar />

            <div className="content-one">
                <div className="texts">
                    <p className="subtitle">Lavado de Autos en el Lugar que estacionaste.</p>
                    <p>Willow es totalmente amigable con el medio ambiente, por su bajo consumo en agua en el lavado y la utilización de jabones biodegradables que no contaminan, ni rayan la pintura del vehículo.</p>
                </div>
                <div className="img-car">
                    <img src={carBlue} alt="auto azul" />
                </div>
                <div className="img-background">
                    <img src={background} alt="mancha de agua azul" />
                </div>
            </div>

            <div className="content-two">
                <div className="img-car">
                    <img src={carPink} alt="auto rosa" />
                </div>
                <div className="texts">
                    <p className="subtitle">¿Estas en el trabajo y quieres aprovechar para que te lavemos el auto?</p>
                    <p>Estas en el trabajo o en tu casa y tienes que lavar tu auto? No pierdas tiempo y no te preocupes, con Willow podes hacer tu pedido online y se lava el auto sin moverlo del lugar.</p>
                </div>
            </div>

            <div className="content-two">
                <div className="texts texts-three">
                    <p className="subtitle">¿Quieres ser uno de nuestros lavadores?</p>
                    <p>Queremos conocerte mejor, te invitamos a completar tus datos en el siguiente boton: </p>
                </div>
                <div className="img-car">
                    <img src={carYellow} alt="auto amarillo" />
                </div>
            </div>

            <div className="content-two">
                <img src={peoples} alt="personas" />
                <div className="texts">
                    <p className="subtitle">¿Presisas un lavado?</p>
                    <p className="subtitle">Indicanos donde esta tú auto</p>
                    <p>Te invitamos a completar tus datos a través del siguiente link </p>
                </div>
            </div>

        </div>
    )
}

export default Index;










