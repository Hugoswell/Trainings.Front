import React from "react";
import Header from "../components/Header/Header";
import IndexPresentation from "../components/ImagePresentation/IndexPresentation";
import ParagraphContext from "../components/Paragraph/ParagraphContext";
import Paragraph from "../components/Paragraph/Paragraph";
import SportGrid from "../components/Grid/SportGrid";

const Index = () => {
  return (
    <>
      <Header />
      <IndexPresentation />
      <div className="container-85">
        <ParagraphContext.Provider
          value={{
            text:
              "Reprendre le sport,\n Améliorer sa santé,\n Gagner en masse musculaire.\n Peu importe votre objectif,\n nous vous y emmènerons.",
          }}
        >
          <Paragraph />
        </ParagraphContext.Provider>
        <SportGrid />
      </div>
    </>
  );
};

export default Index;
