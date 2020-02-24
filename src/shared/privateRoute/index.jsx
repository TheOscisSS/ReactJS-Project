import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.uid ? (
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
        )
      }
    />
  );
};
