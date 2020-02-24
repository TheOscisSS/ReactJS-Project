import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <Menu>
    <Menu.Item>
      <Link to='/create'>New survey</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/surveys'>My surveys</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to='/templates'>Templates surveys</Link>
    </Menu.Item>
  </Menu>
);

export default Sidebar;
