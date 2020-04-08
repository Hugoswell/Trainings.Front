import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SignUpCta = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (!isLoggedIn) {
    return (
      <div>
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
