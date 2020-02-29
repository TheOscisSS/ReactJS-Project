import React from "react";
import { Link } from "react-router-dom";

import penguin from "shared/img/penguin.svg";
import styles from "./styles.module.scss";

const HeaderLogo = () => (
  <Link to='/'>
    <div className={styles.header__logo}>
      <img className={styles.header__img} src={penguin} alt='logo' />
      <span className={styles.header__title}>SurveyPenguin</span>
    </div>
  </Link>
);

export default HeaderLogo;
