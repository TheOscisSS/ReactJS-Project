import React from "react";
import { Spin, Icon } from "antd";

export default ({ size }) => {
  const antIcon = <Icon type='loading' style={{ fontSize: size }} spin />;
  return <Spin indicator={antIcon} />;
};
