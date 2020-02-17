import React from "react";

import styles from "./styles.module.scss";

const Wrapper = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Wrapper;
