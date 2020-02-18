import React from "react";
import { Form, Icon, Input } from "antd";

import validateStatus from "./validateStatus";

const FormField = ({
  name,
  type,
  placeholder,
  icon,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  hasFeedback
}) => (
  <Form.Item
    hasFeedback={hasFeedback}
    validateStatus={validateStatus(touched[name], errors[name])}
    help={touched[name] && errors[name]}
  >
    <Input
      id={name}
      type={type}
      placeholder={placeholder}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      prefix={<Icon type={icon} style={{ color: "rgba(0,0,0,.25)" }} />}
    />
  </Form.Item>
);

export default FormField;
