import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from "./pages/Register/components";
import Login from "./pages/Login/components";
import styles from "./styles.module.scss";

const Sign = props => (
  <div className={styles.sign}>
    <div className={styles.sign__content}>
      <Switch>
        <Route exact path='/signup' component={Register} />
        <Route exact path='/signin' component={Login} />
      </Switch>
    </div>
  </div>
);

export default Sign;
