import React, { useContext } from "react";
import ParagraphContext from "../Paragraph/ParagraphContext";

const Paragraph = () => {
  const { text } = useContext(ParagraphContext);
  let newText = text.split("\n").map((item, i) => {
    return <p key={i}>{item}</p>;
  });

  return <div className="dark-grey gotham-medium mt-6">{newText}</div>;
};

export default Paragraph;
