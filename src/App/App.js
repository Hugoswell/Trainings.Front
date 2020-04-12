import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes/Routes";
import AuthContext from "./AuthContext";
import Cookies from "js-cookie";

function App() {
  const [auth, setAuth] = useState(true);

  const ReadCookie = () => {
    const token = Cookies.get("token");
    if (token) {
      setAuth(true);
    }
  };

  useEffect(() => {
    ReadCookie();
  });

  return (
    <div>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
