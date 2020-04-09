import React from "react";
import { useContext } from "react";
import AuthContext from "../App/AuthContext";
import Cookies from "js-cookie";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const handleOnClick = () => {
    const inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);
    Cookies.set("token", "fclrehjclkjrehl", {
      expires: inOneMinute,
    });
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
