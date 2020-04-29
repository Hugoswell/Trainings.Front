import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LogoImg from "../../img/logo.png";

const Logo = () => {
  return (
    <div className="absolute absolute-center-horizontaly">
      <Router>
        <Link to="/">
          <img src={LogoImg} alt="Trainings logo" className="h-12" />
        </Link>
      </Router>
    </div>
  );
};

export default Logo;
