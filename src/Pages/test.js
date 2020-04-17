import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Login = () => {
  return (
    <Router>
      <Link to="/dashboard" className="gotham-book orange bg-white text-base">
        Dashboard
      </Link>
    </Router>
  );
};

export default Login;
