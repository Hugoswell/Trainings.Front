import React, { useContext } from "react";
import Cookies from "js-cookie";
import AuthContext from "../App/AuthContext";

const Dashboard = () => {
  const { setAuth } = useContext(AuthContext);

  const handleOnclick = () => {
    Cookies.remove("token");
    setAuth(false);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleOnclick}>Logout</button>
    </div>
  );
};

export default Dashboard;
