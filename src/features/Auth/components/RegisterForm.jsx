import React from "react";
import { Form, Button } from "antd";

import FormField from "./FormField";
import styles from "../styles.module.scss";

const Register = props => (
  <div>
    <div className={styles.auth__title}>
      <h2 className={styles.auth__h2}>Create a new account</h2>
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
          name='Login'
          type='email'
          placeholder='Login (Email)'
          icon='mail'
        />
        <FormField
          name='Password'
          type='password'
          placeholder='Password'
          icon='lock'
        />
        <FormField
          name='Password_confirm'
          type='password'
          placeholder='Confirm password'
          icon='lock'
        />
        <Form.Item>
          <Button
            type='primary'
            size='large'
            htmlType='submit'
            className={styles.auth__button}>
            Create account
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default Register;
