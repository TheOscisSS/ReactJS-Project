import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user.isAuth ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: {
                from: location
              }
            }}
          />
        );
      }}
    />
  );
};
