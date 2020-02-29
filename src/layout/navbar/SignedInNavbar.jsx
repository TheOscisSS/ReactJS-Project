import React from "react";
import { Dropdown, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "auth/authAction";

import styles from "./styles.module.scss";

const SignedInNavbar = props => {
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signOut());
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={signOutHandler}>Log off</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Link to="/profile" className={styles.header__link}>
        UserName
        <Icon type="down" />
      </Link>
    </Dropdown>
  );
};

export default SignedInNavbar;
