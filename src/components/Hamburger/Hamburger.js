import React from "react";
import "./Hamburger.css";
import HeaderContext from "../Header/HeaderContext";
import { useContext } from "react";

const Hamburger = () => {
  const { updateHeader } = useContext(HeaderContext);
  return (
    <div onClick={updateHeader}>
      <span className="block h-05 w-8 dark-grey-bg rounded-sm"></span>
      <span className="block h-05 w-8 dark-grey-bg rounded-sm mt-2"></span>
      <span className="block h-05 w-8 dark-grey-bg rounded-sm mt-2"></span>
    </div>
  );
};

export default Hamburger;
