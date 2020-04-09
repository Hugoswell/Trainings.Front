import React, { useState, useContext } from "react";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import NavList from "./Nav/NavList";
import HeaderContext from "./HeaderContext";
import AuthContext from "../../AuthContext";

const Header = () => {
  const { auth } = useContext(AuthContext);

  const [isDeployed, SetIsDeployed] = useState(false);
  const updateHeader = () => {
    SetIsDeployed((isDeployed) => !isDeployed);
  };

  return (
    <HeaderContext.Provider value={{ isDeployed, updateHeader, auth }}>
      <div
        className={`${
          isDeployed ? "h-screen" : "h-16"
        } transition-all duration-700 ease-out fixed top-0 w-full bg-white`}
      >
        <HeaderTopBar />
        <NavList />
      </div>
    </HeaderContext.Provider>
  );
};

export default Header;
