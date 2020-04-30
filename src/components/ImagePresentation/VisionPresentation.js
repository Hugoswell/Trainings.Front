import React from "react";
import VisionPresentationImage from "../../img/cardio-HF.jpg";

const VisionPresentation = () => {
  return (
    <div className="relative mt-16">
      <img
        className="opacity-90"
        src={VisionPresentationImage}
        alt="Trainings vision"
      />
    </div>
  );
};

export default VisionPresentation;
