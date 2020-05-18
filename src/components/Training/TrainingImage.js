import React from 'react'

const TrainingImage = (props) => {    

    return (
        <div className="mt-16 relative">
            <img src={require(`../../img/${props.imgName}.jpg`)} className="opacity-90" alt={props.imgName} />
            <div className="w-4/5 absolute absolute-center-horizontaly bottom-5p">
                <p className="text-lg text-white gotham-medium">{props.trainingTypeName} - {props.creationDate}</p>
                <p className="text-lg text-white gotham-medium">{props.duration} min</p>
            </div>
        </div>
    )
}

export default TrainingImage;
