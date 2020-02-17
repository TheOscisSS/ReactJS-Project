import React from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "components";

const Home = React.lazy(() => import("pages/Home"));
const About = React.lazy(() => import("pages/About"));
const Sign = React.lazy(() => import("pages/Sign"));

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={["/signin", "/signup"]} component={Sign} />
          <Route exact path='/about' component={About} />
        </Switch>
      </React.Suspense>
    </div>
  );
};

export default App;
