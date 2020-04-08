import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logos/Logo";
import SubscribeCta from "../Ctas/SubscribeCta";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-full h-16 flex items-center justify-around">
        <BurgerMenu />
        <Logo />
        <SubscribeCta isLoggedIn={true} />
      </div>
      <Nav isLoggedIn={true} />
    </>
  );
};

export default Header;
