import React from "react";
import { PreviousMap } from "postcss";

const Question = (props) => {
  return (
    <div className="rounded-lg light-grey-bg mb-10">
      <div className="container-85">
        <p className="pt-3 text-lg gotham-medium orange">{props.question}</p>
        <p className="py-4 gotham-book dark-grey">{props.answer}</p>
      </div>
    </div>
  );
};

export default Question;
