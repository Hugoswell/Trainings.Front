import React from "react";
import { useContext } from "react";
import AuthContext from "../App/AuthContext";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const InNMinute = (minute) => {
    return new Date(new Date().getTime() + minute * 60 * 1000);
  };

  const handleOnClick = () => {
    const inOneMinute = InNMinute(1);
    Cookies.set(
      "user",
      { Id: "0", ApiJwtToken: "ckjnrckjnc", email: "test" },
      {
        expires: inOneMinute,
      }
    );
    setAuth(true);
  };

  return (
    <div>
      <h1>Welcome !</h1>
      <button onClick={handleOnClick}>Login</button>
      <br />
      <Router>
        <Link to="/dashboard" className="gotham-book orange bg-white text-base">
          Dashboard
        </Link>
      </Router>
    </div>
  );
};

export default Login;
