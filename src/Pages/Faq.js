import React from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav"
import FaqPresentation from "../components/ImagePresentation/FaqPresentation"
import Question from "../components/Question/Question"

const Faq = () => {
  return (
    <>
      <Header />
      <FaqPresentation />
      <div className="container-85">
        <div className="mt-12"></div>
        <Question question="Qui êtes vous ?" answer="Trainings est une solution digitale qui permet 
            aux gens d’améliorer leur condition physique. Notre but est d’aider un maximum de personnes
            à atteindre leurs objectifs sur le plan sportif.
            Nous proposons trois types d’entrainement : la musculation, le cardio, le crossfit.
            A terme nous souhaitons également apporter un programme sur l’alimentation." />
        <Question question="Comment marche votre solution ?" answer="Notre solution est une IA 
            (intelligence artificielle) qui génère des entrainements adaptés à vos informations personnelles
            (type d’entrainement, objectif, si vous travaillez à poids de corps etc…)" />
        <Question question="Et l’alimentation ?" answer="A terme, nous souhaitons ajouter des conseils et
            programmes d’alimentation pour ceux qui peuvent être intéressés" />
      </div>
      <div className="h-16"></div>
      <BottomNav />
    </>
  );
};

export default Faq;
