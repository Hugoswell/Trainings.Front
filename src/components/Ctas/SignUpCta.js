import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import HeaderContext from "../Header/HeaderContext";
import { useContext } from "react";

const SignUpCta = () => {
  const { auth } = useContext(HeaderContext);

  if (!auth) {
    return (
      <div className="mt-2 mr-4">
        <Router>
          <Link to="/SignUp" className="gotham-book orange bg-white text-base">
            M'inscrire
          </Link>
        </Router>
      </div>
    );
  }
  return null;
};

export default SignUpCta;
