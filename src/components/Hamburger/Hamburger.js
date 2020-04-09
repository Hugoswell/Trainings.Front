import React from "react";
import "./Hamburger.css";
import HeaderContext from "../Header/HeaderContext";
import { useContext } from "react";

const Hamburger = () => {
  const { isDeployed, updateHeader } = useContext(HeaderContext);

  return (
    <div onClick={updateHeader}>
      <span
        id="burger-span"
        className={`${
          isDeployed ? "open" : ""
        } absolute block h-05 w-8 dark-grey-bg rounded-sm ml-6`}
      ></span>
    </div>
  );
};

export default Hamburger;
