import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import styles from "../styles.module.scss";

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <nav className={styles.header__navigation}>
      <ul className={styles.header__ul}>
        <li>
          <Link className={styles.header__link} to="/about">
            О комапании
          </Link>
        </li>
        <li>
          <Link className={styles.header__link} to="/signin">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
