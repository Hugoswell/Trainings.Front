import React from "react"


const ExerciceTraining = (props) => {
    return (
        <div className="mt-8 light-grey-bg rounded-lg">
            <p className="pt-4 text-lg w-4/5 mx-auto text-center dark-grey gotham-medium">{props.exerciceName}{props.trainingTypeName === "Musculation" && ` (${props.nbSets} séries)`}</p>            
            <div className="mt-6">
                <div className="flex items-center w-3/5 mx-auto">
                <svg className="mr-4 -mt-2" xmlns="http://www.w3.org/2000/svg" width="22" height="26.355" viewBox="0 0 22 26.355"><path d="M14.385,4.942a2.505,2.505,0,0,0,2.538-2.471,2.539,2.539,0,0,0-5.077,0A2.505,2.505,0,0,0,14.385,4.942Zm-8.372,11.4L5.23,18.119H1.692a1.648,1.648,0,1,0,0,3.295h4.1a2.536,2.536,0,0,0,2.333-1.5l.465-1.056-.564-.324a4.948,4.948,0,0,1-2.009-2.193Zm14.3-4.812H17.979L16.6,8.789a5.046,5.046,0,0,0-3.267-2.622L9.575,5.079A5.164,5.164,0,0,0,5.3,5.961L3.2,7.526a1.617,1.617,0,0,0-.313,2.309,1.723,1.723,0,0,0,2.372.3l2.1-1.565A1.681,1.681,0,0,1,8.7,8.259l.777.225-1.981,4.5a3.259,3.259,0,0,0,1.391,4.134L13.378,19.7l-1.453,4.516a1.639,1.639,0,0,0,1.109,2.064,1.733,1.733,0,0,0,.507.076A1.689,1.689,0,0,0,15.155,25.2L16.828,20a2.452,2.452,0,0,0-1.144-2.8l-3.239-1.86,1.656-4.03,1.072,2.133a2.562,2.562,0,0,0,2.28,1.384h2.855a1.648,1.648,0,1,0,0-3.294Z" fill="rgba(255,159,46,0.56)"/></svg>
                    <p className="leading-none text-lg dark-grey gotham-book">{props.trainingTypeName === "Musculation" && `Répétitions : ${props.nbReps}`}</p>
                    <p className="leading-none text-lg dark-grey gotham-book">{props.trainingTypeName !== "Musculation" && `Effort : ${props.effortDuration} ${props.trainingTypeName !== "Cardio" ? "sec" : "min"}`}</p>
                </div>
                <div className="mt-6 flex items-center w-3/5 mx-auto">
                    <svg className="mr-4 -mt-2" xmlns="http://www.w3.org/2000/svg" width="20" height="24.614" viewBox="0 0 20 24.614"><path d="M36,14.615A10,10,0,1,1,24.461,4.735V3.077H23.115a.579.579,0,0,1-.577-.577V.577A.579.579,0,0,1,23.115,0h5.769a.579.579,0,0,1,.577.577V2.5a.579.579,0,0,1-.577.577H27.538V4.735a9.938,9.938,0,0,1,4.793,2.144l1.322-1.322a.577.577,0,0,1,.817,0l1.36,1.36a.577.577,0,0,1,0,.817L34.417,9.148l-.029.029A9.9,9.9,0,0,1,36,14.615Zm-8.461,1.731V9.062a.579.579,0,0,0-.577-.577H25.038a.579.579,0,0,0-.577.577v7.283a.579.579,0,0,0,.577.577h1.923A.579.579,0,0,0,27.538,16.345Z" transform="translate(-16)" fill="rgba(255,159,46,0.56)"/></svg>
                    <p className="leading-none text-lg dark-grey gotham-book">{(props.trainingTypeName === "Musculation" || props.trainingTypeName === "Cardio") && `Repos : ${props.restDuration} min`}</p>
                    <p className="leading-none text-lg dark-grey gotham-book">{(props.trainingTypeName === "Crossfit" || props.trainingTypeName === "HIIT") && `Repos : ${props.restDuration} sec`}</p>
                </div>
                <div className="h-4"></div>
            </div>
        </div>
    )
}

export default ExerciceTraining;
