import React from "react";
import SportVisual from "./SportVisual";
import MusculationImg from "../../img/musculation-F.jpg";
import CardioImg from "../../img/cardio-H.jpg";
import HIITImg from "../../img/crossfit-HF.jpg";
import CrossfitImg from "../../img/crossfit-F.jpg";

const SportGrid = () => {
  return (
    <div className="mt-12 mb-10 grid grid-cols-2 gap-4">
      <SportVisual
        img={MusculationImg}
        alt="image musculation"
        text="Musculation"
      />
      <SportVisual img={CardioImg} alt="image cardio" text="Cardio" />
      <SportVisual img={HIITImg} alt="image HIIT" text="HIIT" />
      <SportVisual img={CrossfitImg} alt="image crossfit" text="Crossfit" />
    </div>
  );
};

export default SportGrid;
