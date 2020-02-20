import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from "./RegisterFormContainer";
import Login from "./LoginFormContainer";
import styles from "./styles.module.scss";

const Sign = props => (
  <div className={styles.auth}>
    <div className={styles.auth__content}>
      <Switch>
        <Route exact path="/signup" component={Register} />
        <Route exact path="/signin" component={Login} />
      </Switch>
    </div>
  </div>
);

export default Sign;
