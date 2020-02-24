import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export default () => {
  return (
    <Link className={styles.header__link} to='/signin'>
      Log in
    </Link>
  );
};
