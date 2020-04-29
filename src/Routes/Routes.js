import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedSignIn from "./ProtectedSignIn";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Dashboard from "../Pages/Dashboard";
import Trainings from "../Pages/Trainings";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <ProtectedSignIn exact path="/signin" component={SignIn} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/trainings" component={Trainings} />
    </Switch>
  );
};

export default Routes;
