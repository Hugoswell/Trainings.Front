import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logos/Logo";
import SubscribeCta from "../Ctas/SubscribeCta";
import NavList from "./Nav/NavList";
import "./Header.css";

const Header = () => {
  const [isDeployed, SetIsDeployed] = useState(false);

  const updateHeader = () => {
    SetIsDeployed((isDeployed) => !isDeployed);
  };

  return (
    <div
      className={`${
        isDeployed ? "h-screen" : "h-16"
      } transition-all duration-700 ease-out fixed top-0 w-full bg-red-300`}
    >
      <div className="h-16 flex items-center justify-around">
        <Hamburger updateHeader={updateHeader} />
        <Logo />
        <SubscribeCta isLoggedIn={false} />
      </div>
      <div
        className={`${
          isDeployed ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-500 ease-out flex flex-col items-center`}
      >
        <NavList isLoggedIn={false} />
      </div>
    </div>
  );
};

export default Header;
