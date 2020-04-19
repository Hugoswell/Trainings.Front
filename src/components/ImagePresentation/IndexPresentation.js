import React from "react";
import IndexPresentationImage from "../../img/musculation-HF.jpg";

const IndexPresentation = () => {
  return (
    <div className="relative mt-16">
      <img
        className="opacity-75"
        src={IndexPresentationImage}
        alt="Trainings presentation"
      />
      <div className="w-4/5 absolute absolute-center-horizontaly bottom-5p">
        <h1 className="text-xl text-center text-white gotham-medium">
          Des entrainements adaptés à votre demande et besoin
        </h1>
      </div>
    </div>
  );
};

export default IndexPresentation;
