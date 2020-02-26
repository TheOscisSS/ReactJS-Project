import React from "react";
import { Form, Icon, Input } from "antd";

const FormField = ({ validateStatus, name, type, placeholder, icon }) => (
  <Form.Item validateStatus={validateStatus} hasFeedback>
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      prefix={<Icon type={icon} style={{ color: "rgba(0,0,0,.25)" }} />}
    />
  </Form.Item>
);

export default FormField;
