import React, { useState, useContext } from "react";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import NavList from "./Nav/NavList";
import HeaderContext from "./HeaderContext";
import AuthContext from "../../App/AuthContext";

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [isOpen, SetIsOpen] = useState(false);
  const handleUpdate = () => {
    SetIsOpen((isOpen) => !isOpen);
  };

  return (
    <HeaderContext.Provider value={{ auth, setAuth, isOpen, handleUpdate }}>
      <div
        className={`${
          isOpen ? "h-screen" : "h-16"
        } transition-all duration-700 ease-out fixed top-0 w-full bg-white z-10`}
      >
        <HeaderTopBar />
        <NavList />
      </div>
    </HeaderContext.Provider>
  );
};

export default Header;
