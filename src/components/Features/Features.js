import React from "react"
import RunImg from "../../img/run.svg"
import HeartImg from "../../img/heart.svg"
import AnalyseImg from "../../img/analyse.svg"

const Features = () => {
    return (
        <div className="flex justify-between mt-6">
            <img src={RunImg} alt="Running image" className="inline-block h-16"/>
            <img src={HeartImg} alt="Running image" className="inline-block h-14 mt-8"/>
            <img src={AnalyseImg} alt="" className="inline-block h-12 mt-4"/>
        </div>
    );
}

export default Features;