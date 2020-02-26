import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, redirect, forAuth, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth);
  const condition = forAuth ? auth.uid : !auth.uid;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return condition ? <Component /> : <Redirect to={redirect} />;
      }}
    />
  );
};

export default PrivateRoute;
