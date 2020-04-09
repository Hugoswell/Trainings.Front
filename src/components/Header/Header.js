import React, { useState } from "react";
import HeaderTopBar from "./HeaderTopBar";
import NavList from "./Nav/NavList";
import HeaderContext from "./HeaderContext";

const Header = () => {
  const isLoggedIn = false;
  const [isDeployed, SetIsDeployed] = useState(true);
  const updateHeader = () => {
    SetIsDeployed((isDeployed) => !isDeployed);
  };

  return (
    <HeaderContext.Provider value={{ isDeployed, updateHeader, isLoggedIn }}>
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
