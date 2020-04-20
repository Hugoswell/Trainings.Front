import React from "react";

const Cta = (props) => {
  return (
    <button
      type="submit"
      className="h-14 mb-32 orange-bg rounded text-lg text-white text-center gotham-bold"
    >
      {props.text}
    </button>
  );
};

export default Cta;
