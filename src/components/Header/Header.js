import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logos/Logo";
import SubscribeCta from "../Ctas/SubscribeCta";
import NavList from "./Nav/NavList";
import "./Nav/NavList.css";

const Header = () => {
  const [isDeployed, SetIsDeployed] = useState(false);

  return (
    <div className="h-16 fixed top-0 w-full bg-red-300">
      <div className="h-16 flex items-center justify-around">
        <Hamburger />
        <Logo />
        <SubscribeCta isLoggedIn={false} />
      </div>
      <div id="navlist" className="flex flex-col items-center">
        <NavList isLoggedIn={false} />
      </div>
    </div>
  );
};

export default Header;
