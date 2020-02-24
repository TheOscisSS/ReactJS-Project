import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "home";
import Auth from "auth";
import Navbar from "layout/navbar";
import PrivateRoute from "shared/privateRoute";
import Loading from "shared/loading";

const About = lazy(() => import("about"));

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Loading>
        <Switch>
          <PrivateRoute
            exact
            path={["/", "/create", "/surveys", "/templates"]}
            component={Home}
          />
          <Route exact path={["/signin", "/signup"]} component={Auth} />
          <Route
            exact
            path="/about"
            render={() => (
              <Suspense fallback={<div> Loading... </div>}>
                <About />
              </Suspense>
            )}
          />
          <Route path="*" component={() => <div> 404 </div>} />
        </Switch>
      </Loading>
    </div>
  );
};

export default App;
