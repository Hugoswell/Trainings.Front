import React from "react";
import Header from "../Components/Header/Header";
import IndexPresentation from "../Components/ImagePresentation/IndexPresentation";
import ParagraphContext from "../Components/Paragraph/ParagraphContext";
import Paragraph from "../Components/Paragraph/Paragraph";

const Index = () => {
  return (
    <>
      <Header />
      <IndexPresentation />
      <div className="container">
        <ParagraphContext.Provider
          value={{
            text: `Reprendre le sport,
            Améliorer sa santé,
            Gagner en masse musculaire.
            Peu importe votre objectif,
            nous vous y emmènerons`,
          }}
        >
          <Paragraph />
        </ParagraphContext.Provider>
      </div>
    </>
  );
};

export default Index;
