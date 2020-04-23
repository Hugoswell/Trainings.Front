import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../App/AuthContext";

//Leave exacly like that, the parameters order is important
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/signin" />)}
    />
  );
};

export default ProtectedRoute;
