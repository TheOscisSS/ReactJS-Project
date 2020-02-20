import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "layout/header";

const Home = lazy(() => import("home"));
const About = lazy(() => import("about"));
const Auth = lazy(() => import("auth"));

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Suspense fallback={<div> Loading... </div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={["/signin", "/signup"]} component={Auth} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
