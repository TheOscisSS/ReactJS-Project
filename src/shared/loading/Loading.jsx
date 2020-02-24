import React from "react";
import Spin from "./Spin";

import styles from "./styles.module.scss";

export default () => (
  <div className={styles.loading_page}>
    <Spin size="40px" />
  </div>
);
