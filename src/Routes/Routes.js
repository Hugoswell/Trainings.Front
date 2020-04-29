import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedSignIn from "./ProtectedSignIn";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Dashboard from "../Pages/Dashboard";
import Trainings from "../Pages/Trainings";
import Profile from "../Pages/Profile";
import Vision from "../Pages/Vision";
import Faq from "../Pages/Faq";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/vision" component={Vision} />
      <Route exact path="/faq" component={Faq} />
      <ProtectedSignIn exact path="/signin" component={SignIn} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/trainings" component={Trainings} />
      <ProtectedRoute exact path="/profile" component={Profile} />
    </Switch>
  );
};

export default Routes;
