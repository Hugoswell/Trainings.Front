import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLogin from "./ProtectedLogin";
import Index from "../Pages/Index";
import Test from "../Pages/test";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/test" exact component={Test} />
      <ProtectedLogin path="/login" component={Login} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
