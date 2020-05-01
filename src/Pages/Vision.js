import React from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav"
import VisionPresentation from "../components/ImagePresentation/VisionPresentation"

const Vision = () => {
  return (
    <>
      <Header />
      <VisionPresentation />
      <div className="container-85">
        <h1 className="text-lg mt-12 gotham-medium orange">Notre vision</h1>
        <p className="dark-grey mt-6 gotham-medium">
          Nous pensons qu’il est important de varier ses entrainements de sport.
          Tout d’abord pour éviter la routine, mais également pour progresser en permanence.
          Nous sommes donc là pour vous apporter des entrainements variés, 
          adaptés à votre demande et à la fréquence que vous souhaitez.
          Ne vous prenez plus la tête, laissez nous faire.
        </p>
      </div>
      <div className="h-16"></div>
      <BottomNav />
    </>
  );
};

export default Vision;
