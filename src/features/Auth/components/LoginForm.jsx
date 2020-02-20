import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "antd";

import FormField from "./FormField";
import styles from "../styles.module.scss";

const Login = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  isValid
}) => (
  <div>
    <div className={styles.auth__title}>
      <h2 className={styles.auth__h2}>Log in to your account</h2>
    </div>
    <div className={styles.auth__container}>
      <Form onSubmit={handleSubmit}>
        <FormField
          name='email'
          type='text'
          placeholder='Login (Email)'
          icon='user'
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          hasFeedback={!values.email}
        />
        <FormField
          name='password'
          type='password'
          placeholder='Password'
          icon='lock'
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          hasFeedback={!values.password}
        />
        <Form.Item>
          <Button
            type='primary'
            size='large'
            htmlType='submit'
            loading={isSubmitting}
            className={styles.auth__button}>
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          <div className={styles.auth__other}>
            <Link to='signup'>Sign up</Link>
            <Link to='forgot'>Forgot password?</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default Login;
