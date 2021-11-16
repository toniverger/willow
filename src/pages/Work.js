import React from "react";
import FormWork from "../components/Forms/Work/Index";
import Navbar from "../components/Navbar";

const Work = () => {
    return(
        <>
        <Navbar />
        <div className="work">
            <div className="work_texts">
                <p className="work_subtitle">Quiero ser parte</p>
                <p className="wor_texts_p">Estas en el trabajo o en tu casa y tienes que lavar tu auto?, no pierdas tiempo y no te preocupes, con Willow podes hacer tu pedido online y se lava el auto sin necesidad de moverlo de su lugar.</p>
            </div>
            <div className="work_form">
                <FormWork />
            </div>
        </div>
        </>
    )
}
export default Work;