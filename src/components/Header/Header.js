import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logos/Logo";
import SubscribeCta from "../Ctas/SubscribeCta";
import NavList from "./Nav/NavList";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-full h-16 flex items-center justify-around">
        <Hamburger />
        <Logo />
        <SubscribeCta isLoggedIn={false} />
      </div>
      <div id="nav" className="mt-16 flex flex-col items-center">
        <NavList isLoggedIn={false} />
      </div>
    </>
  );
};

export default Header;
