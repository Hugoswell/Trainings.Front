import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedSignIn from "./ProtectedSignIn";
import Index from "../Pages/Index";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/signup" component={SignUp} />
      <ProtectedSignIn exact path="/signin" component={SignIn} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
