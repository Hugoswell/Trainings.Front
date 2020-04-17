import React from "react";
import { useContext } from "react";
import AuthContext from "../App/AuthContext";
import Cookies from "js-cookie";

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
    </div>
  );
};

export default Login;
