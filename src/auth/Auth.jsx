import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from "./RegisterFormContainer";
import Login from "./LoginFormContainer";
import styles from "./styles.module.scss";
import { useHistory, useLocation } from "react-router-dom";

const Sign = props => {
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  return (
    <div className={styles.auth}>
      <div className={styles.auth__content}>
        <Switch>
          <Route
            exact
            path="/signup"
            render={() => <Register history={history} from={from} />}
          />
          <Route
            exact
            path="/signin"
            render={() => <Login history={history} from={from} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Sign;
