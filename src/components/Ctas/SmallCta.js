import React from "react";

const Cta = (props) => {
  return (
    <button
      type="submit"
      className="h-14 w-1/2 mt-8 mb-32 orange-bg rounded text-lg text-white text-center gotham-bold"
    >
      {props.text}
    </button>
  );
};

export default Cta;
