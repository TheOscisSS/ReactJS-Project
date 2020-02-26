import React from "react";
import { Alert } from "antd";

const Notification = ({ className, error, type, message }) => {
  return error ? (
    <div className={className}>
      <Alert message={message} type={type} showIcon />
    </div>
  ) : null;
};

export default Notification;
