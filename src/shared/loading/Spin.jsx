import React from "react";
import { Spin as BaseSpin, Icon } from "antd";

const Spin = ({ size }) => {
  const antIcon = <Icon type="loading" style={{ fontSize: size }} spin />;
  return <BaseSpin indicator={antIcon} />;
};

export default Spin;
