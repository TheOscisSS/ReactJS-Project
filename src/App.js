import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "features/Header";

const Home = lazy(() => import("features/Home"));
const About = lazy(() => import("features/About"));
const Auth = lazy(() => import("features/Auth"));

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
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
