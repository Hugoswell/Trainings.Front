import React, { useContext } from "react";
import ParagraphContext from "../Paragraph/ParagraphContext";

const Paragraph = () => {
  const { text } = useContext(ParagraphContext);
  return <p className="dark-grey gotham-medium mt-6">{text}</p>;
};

export default Paragraph;
