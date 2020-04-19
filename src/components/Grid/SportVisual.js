import React from "react";

const SportVisual = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.alt} className="rounded-lg" />
      <h2 className="mt-3 gotham-medium dark-grey">{props.text}</h2>
    </div>
  );
};

export default SportVisual;
