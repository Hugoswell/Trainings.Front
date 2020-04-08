import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logos/Logo";
import SignUpCta from "../Ctas/SignUpCta";

const HeaderTopBar = (props) => {
  const updateHeader = props.updateHeader;

  return (
    <div className="h-16 flex items-center justify-around">
      <Hamburger updateHeader={updateHeader} />
      <Logo />
      <SignUpCta isLoggedIn={false} />
    </div>
  );
};

export default HeaderTopBar;
