import React from "react";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

import Spin from "./Spin";
import styles from "./styles.module.scss";

const Loding = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth);

  if (!isLoaded(auth)) {
    return (
      <div className={styles.loading_page}>
        <Spin size='40px' />
      </div>
    );
  }
  return children;
};

export default Loding;
