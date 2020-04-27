import React from "react"
import RunImg from "../../img/run.svg"
import HeartImg from "../../img/heart.svg"
import AnalyseImg from "../../img/analyse.svg"
import Feature from "./Feature"
import Paragraph from "../Paragraph/Paragraph";

const Features = () => {
    return (
        <div>            
            <Feature img={RunImg} alt="Running image" text="Reprendre le sport" left={true}/>
            <Feature img={HeartImg} alt="Heart image" text="Améliorer sa santé" left={false}/>
            <Feature img={AnalyseImg} alt="Analyse image" text="Analyser votre progression" left={true}/>
            <Paragraph big={true}
            text="Peu importe votre objectif,$ nous vous y emmènerons." />
        </div>
    );
}

export default Features;