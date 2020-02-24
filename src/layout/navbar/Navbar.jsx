import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavbarLogo from "./NavbarLogo";
import SignedOutNavbar from "./SignedOutNavbar";
import SignedInNavbar from "./SignedInNavbar";
import { signOut } from "auth/authAction";
import styles from "./styles.module.scss";

const Navbar = props => {
  const { auth, signOut } = props;

  const link = auth.uid ? (
    <SignedInNavbar signOut={signOut} />
  ) : (
    <SignedOutNavbar />
  );

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

const mapState = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatch = {
  signOut
};

export default connect(mapState, mapDispatch)(Navbar);
