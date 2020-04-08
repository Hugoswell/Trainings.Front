import React from "react";
import "./Hamburger.css";

const Hamburger = () => {
  function openNavList() {
    console.log("burger cliqué");
  }

  return (
    <div onClick={openNavList}>
      <span className="block h-05 w-8 dark-grey-bg rounded-sm"></span>
      <span className="block h-05 w-8 dark-grey-bg rounded-sm mt-2"></span>
      <span className="block h-05 w-8 dark-grey-bg rounded-sm mt-2"></span>
    </div>
  );
};

export default Hamburger;
