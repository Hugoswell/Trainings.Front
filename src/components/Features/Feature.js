import React from "react"

const Features = (props) => {
    return (
        <div className="flex justify-around items-center h-16 mt-8">
            { props.left && <img src={props.img} alt={props.alt} className="inline-block"/>}
            <h2 className="w-48 text-center gotham-medium text-lg dark-grey">{props.text}</h2>
            { !props.left && <img src={props.img} alt={props.alt} className="inline-block"/>}
        </div>
    );
}

export default Features;