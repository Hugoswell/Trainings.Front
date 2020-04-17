import React from "react";
import "./Hamburger.css";
import HeaderContext from "../Header/HeaderContext";
import { useContext } from "react";

const Hamburger = () => {
  const { isOpen, handleUpdate } = useContext(HeaderContext);

  return (
    <div onClick={handleUpdate} className="hamburger ml-6 relative">
      <span
        id="burger-span"
        className={`${
          isOpen && "open"
        } absolute block h-05 w-8 dark-grey-bg rounded-sm`}
      ></span>
    </div>
  );
};

export default Hamburger;
