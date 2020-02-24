import React from "react";
import { Dropdown, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export default props => {
  const menu = (
    <Menu>
      <Menu.Item onClick={props.signOut}>Log off</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Link to='/profile' className={styles.header__link}>
        UserName
        <Icon type='down' />
      </Link>
    </Dropdown>
  );
};
