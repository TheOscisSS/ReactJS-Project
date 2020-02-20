import React from "react";
import { Link } from "react-router-dom";

import HeaderLogo from "./HeaderLogo";
import styles from "./styles.module.scss";

const Header = () => (
  <header className={styles.header}>
    <HeaderLogo />
    <nav className={styles.header__navigation}>
      <ul className={styles.header__ul}>
        <li>
          <Link className={styles.header__link} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.header__link} to="/signin">
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
