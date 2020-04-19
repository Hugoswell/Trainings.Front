import React from "react";
import Header from "../components/Header/Header";
import IndexPresentation from "../components/ImagePresentation/IndexPresentation";
import Paragraph from "../components/Paragraph/Paragraph";
import SportGrid from "../components/Grid/SportGrid";
import Question from "../components/Question/Question";

const Index = () => {
  return (
    <>
      <Header />
      <IndexPresentation />
      <div className="container-85">
        <Paragraph
          big={true}
          text="Reprendre le sport,$ Améliorer sa santé,$ Gagner en masse musculaire.$ Peu importe votre objectif,$ nous vous y emmènerons."
        />
        <SportGrid />
        <Question
          question="Comment nous voyons les choses ?"
          answer="Nous pensons qu’il est important de varier ses entrainements de sport. Tout d’abord pour éviter la routine, mais également pour progresser en permanence.
                  Nous sommes donc là pour vous apporter des entrainements variés, adaptés à votre demande et à la fréquence que vous souhaitez.
                  Ne vous vous prenez plus la tête, laissez nous faire."
        />
        <Question
          question="Comment marche votre solution ?"
          answer="Notre solution est une IA (intelligence artificielle) qui génère des entrainements adaptés à vos informations personnelles (type d’entrainement, objectif, si vous travaillez à poids de corps etc…)"
        />
      </div>
    </>
  );
};

export default Index;
