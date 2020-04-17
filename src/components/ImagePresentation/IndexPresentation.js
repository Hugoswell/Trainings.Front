import React from "react";
import IndexPresentationImage from "../../img/musculation-HF.jpg";

const IndexPresentation = () => {
  return (
    <div className="relative mt-16">
      <img
        className="opacity-75"
        src={IndexPresentationImage}
        alt="Trainings image de presentation"
      />
      <h1 className="absolute bottom-5p text-xl text-center text-white gotham-medium">
        Des entrainements adaptés à votre demande et besoin
      </h1>
    </div>
  );
};

export default IndexPresentation;
