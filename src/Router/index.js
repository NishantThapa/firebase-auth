import React from "react";
import { Route, Switch } from "react-router-dom";
import routeConfig from "./routesConfig";
import PrivateRoute from "./PrivateRoute";
import Login from "../Auth/Login";

const Routes = (props) => {
  return (
    <Switch>
      {routeConfig.map((route, i) => (
        <PrivateRoute key={route} {...route} />
      ))}
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
