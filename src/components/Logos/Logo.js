import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../img/logo.png";

const Logo = () => {
  return (
    <div className="absolute absolute-center-horizontaly">
      <Link to="/">
        <img src={LogoImg} alt="Trainings logo" className="h-12" />
      </Link>
    </div>
  );
};

export default Logo;
