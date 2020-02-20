import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "antd";

import FormField from "shared/forms/FormField";
import styles from "./styles.module.scss";

const Login = props => (
  <div>
    <div className={styles.auth__title}>
      <h2 className={styles.auth__h2}>Log in to your account</h2>
    </div>
    <div className={styles.auth__container}>
      <Form>
        <FormField
          name='Username'
          type='text'
          placeholder='Username'
          icon='user'
        />
        <FormField
          name='Password'
          type='password'
          placeholder='Password'
          icon='lock'
        />
        <Form.Item>
          <Button
            type='primary'
            size='large'
            htmlType='submit'
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
