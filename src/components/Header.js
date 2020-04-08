import React from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from "./Logos/Logo";
import SubscribeCta from "./SubscribeCta";

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
