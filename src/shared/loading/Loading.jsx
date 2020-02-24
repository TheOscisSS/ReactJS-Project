import React from "react";
import penguinBlue from "shared/img/penguinBlue.svg";
import Spin from "./Spin";

import styles from "./styles.module.scss";

export default () => (
  <div className={styles.loading_page}>
    <img className={styles.loading_page__img} src={penguinBlue} alt='logo' />
    <h1 className={styles.loading_page__title}>ServeyPenguin</h1>
    <Spin size='40px' />
  </div>
);
