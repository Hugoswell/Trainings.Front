import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SubscribeCta = () => {
  return (
    <div>
      <Router>
        <Link to="/SignUp" className="gotham-book orange bg-white">
          M'inscrire
        </Link>
      </Router>
    </div>
  );
};

export default SubscribeCta;
