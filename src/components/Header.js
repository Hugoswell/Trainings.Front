import React from "react";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Logo from "../components/Logo";
import SubscribeCta from "../components/SubscribeCta";

const Header = () => {
  return (
    <div className="fixed w-full h-16 flex items-center justify-around">
      <BurgerMenu />
      <Logo />
      <SubscribeCta />
    </div>
  );
};

export default Header;
