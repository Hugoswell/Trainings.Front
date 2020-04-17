import React from "react";
import Hamburger from "../../Hamburger/Hamburger";
import Logo from "../../Logos/Logo";
import SignUpCta from "../../Ctas/SignUpCta";

const HeaderTopBar = () => {
  return (
    <div className="h-16 flex items-center justify-between">
      <Hamburger />
      <Logo />
      <SignUpCta isLoggedIn={false} />
    </div>
  );
};

export default HeaderTopBar;
