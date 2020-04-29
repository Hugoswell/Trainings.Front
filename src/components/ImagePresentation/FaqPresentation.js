import React from "react";
import FaqPresentationImage from "../../img/nutrition.jpg";

const VisionPresentation = () => {
  return (
    <div className="relative mt-16">
      <img
        className="opacity-90"
        src={FaqPresentationImage}
        alt="Trainings foire aux questions"
      />
      <div className="absolute absolute-center">
        <h1 className="text-xl text-center text-white gotham-medium">
          FAQ
        </h1>
      </div>
    </div>
  );
};

export default VisionPresentation;
