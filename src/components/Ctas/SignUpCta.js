import React from "react";
import { Link } from "react-router-dom";
import HeaderContext from "../Header/HeaderContext";
import { useContext } from "react";

const SignUpCta = () => {
  const { auth } = useContext(HeaderContext);

  if (!auth) {
    return (
      <div className="mt-2 mr-4">
        <Link to="/signup" className="gotham-book orange bg-white text-base">
          M'inscrire
        </Link>
      </div>
    );
  }
  return null;
};

export default SignUpCta;
