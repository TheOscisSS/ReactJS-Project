import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import NavbarLogo from "./NavbarLogo";
import SignedOutNavbar from "./SignedOutNavbar";
import SignedInNavbar from "./SignedInNavbar";
import styles from "./styles.module.scss";

const Navbar = props => {
  const auth = useSelector(state => state.firebase.auth);

  const link = auth.uid ? <SignedInNavbar /> : <SignedOutNavbar />;

  return (
    <header className={styles.header}>
      <NavbarLogo />
      <nav className={styles.header__navigation}>
        <ul className={styles.header__ul}>
          <li>
            <Link className={styles.header__link} to='/about'>
              About
            </Link>
          </li>
          <li>{auth.isLoaded && link}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
