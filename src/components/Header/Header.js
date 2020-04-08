import React, { useState } from "react";
import HeaderTopBar from "./HeaderTopBar";
import NavList from "./Nav/NavList";

const Header = () => {
  const [isDeployed, SetIsDeployed] = useState(false);

  const updateHeader = () => {
    SetIsDeployed((isDeployed) => !isDeployed);
  };

  return (
    <div
      className={`${
        isDeployed ? "h-screen" : "h-16"
      } transition-all duration-700 ease-out fixed top-0 w-full bg-white`}
    >
      <HeaderTopBar updateHeader={updateHeader} />
      <div
        className={`${
          isDeployed ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-300 ease-out flex flex-col items-center`}
      >
        <NavList isLoggedIn={false} />
      </div>
    </div>
  );
};

export default Header;
