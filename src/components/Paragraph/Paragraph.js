import React from "react";

const Paragraph = (props) => {
  const text = props.text;

  let formatedText = text.split("$").map((item, i) => {
    return <p key={i}>{item}</p>;
  });

  return (
    <div className={`${props.big && "text-lg"} dark-grey gotham-medium mt-6`}>
      {formatedText}
    </div>
  );
};

export default Paragraph;
