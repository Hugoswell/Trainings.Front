import React from "react";

const Cta = (props) => {
  const loading = props.loading;

  return (
    <button
      type="submit"
      className={`${loading ? "mt-2" : "mt-8"} h-14 mb-32 orange-bg rounded text-lg text-white text-center gotham-bold`}
    >
      {props.text}
    </button>
  );
};

export default Cta;
