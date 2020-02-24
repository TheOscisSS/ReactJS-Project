import React from "react";
import { Route, Switch } from "react-router-dom";

import Sidebar from "layout/sidebar/Sidebar";

const Home = () => (
  <div>
    <Sidebar />
    <Switch>
      <Route exact path='/' component={() => <div>Home</div>} />
      <Route exact path='/create' component={() => <div>Create</div>} />
      <Route exact path='/surveys' component={() => <div>surveys</div>} />
      <Route exact path='/templates' component={() => <div>templates</div>} />
    </Switch>
  </div>
);

export default Home;
