import React from "react";
import SignUpPresentationImage from "../../img/musculation-H.jpg";

const SignUpPresentation = () => {
  return (
    <div className="relative mt-16">
      <img
        className="opacity-75"
        src={SignUpPresentationImage}
        alt="Inscription presentation"
      />
      <div className="w-4/5 absolute absolute-center-horizontaly bottom-5p">
        <h1 className="text-xl text-center text-white gotham-medium">
          Prenez votre corps en main et atteignez vos objectifs
        </h1>
      </div>
    </div>
  );
};

export default SignUpPresentation;
