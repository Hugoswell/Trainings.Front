import React from "react";
import "./Hamburger.css";
import HeaderContext from "../Header/HeaderContext";
import { useContext } from "react";

const Hamburger = () => {
  const { updateHeader } = useContext(HeaderContext);

  return (
    <div onClick={updateHeader} className="relative">
      <span
        id="burger-span"
        className="block h-05 w-8 dark-grey-bg rounded-sm"
      ></span>
    </div>
  );
};

export default Hamburger;
