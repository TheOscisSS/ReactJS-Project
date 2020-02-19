import React from "react";
import { Link } from "react-router-dom";

import logo from "../penguin.svg";
import styles from "../styles.module.scss";

const Logo = () => (
  <Link to="/">
    <div className={styles.header__logo}>
      <img className={styles.header__img} src={logo} alt="logo" />
      <span className={styles.header__title}>ServeyPenguin</span>
    </div>
  </Link>
);

export default Logo;
