import React from "react";
import { Form, Icon, Input } from "antd";

const FormField = ({
  validateStatus,
  name,
  type,
  placeholder,
  icon,
  values,
  handleChange,
  handleBlur
}) => (
  <Form.Item validateStatus={validateStatus} hasFeedback>
    <Input
      id={name}
      type={type}
      placeholder={placeholder}
      value={values}
      onChange={handleChange}
      onBlur={handleBlur}
      prefix={<Icon type={icon} style={{ color: "rgba(0,0,0,.25)" }} />}
    />
  </Form.Item>
);

export default FormField;
