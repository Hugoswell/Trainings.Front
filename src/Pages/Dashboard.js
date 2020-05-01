import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav"
import UserInformationWarning from "../components/Warnings/UserInformationWarning"
import Cookies from "js-cookie";
import Axios from "axios"
import UrlBuilder from "../components/Helpers/UrlBuilder" 
import { useHistory } from "react-router-dom";
import AuthContext from "../App/AuthContext"

const Dashboard = () => {
  const jwt = Cookies.get("JWT");
  const [hasFilledInfo, setHasFilledInfo] = useState(true);
  const history = useHistory();
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!jwt) {
      history.push("/signin");
    }
    else {
      getUserInformation(jwt);
    }
  });

  const getUserInformation = (jwt) => {
    const url = UrlBuilder("https://api.trainings.agency", "/auth", "/me");

    Axios.get(url, { headers: {  Authorization: `Bearer ${jwt}` } })
    .then((response) => {
      getUserInformationCallback(response);
    })
    .catch((error) => {
      Cookies.remove("JWT");
      setAuth(false);
      history.push("/signin");
    });
  };

  const getUserInformationCallback = (response) => {
    response.data[3] === "False" && setHasFilledInfo(false);
  }
   
  return (
    <>
      <Header />
      <div className="container-85">
        { !hasFilledInfo && <UserInformationWarning /> }
      </div>
      <div className="h-16"></div>
      <BottomNav/>
    </>
  );
};

export default Dashboard;
