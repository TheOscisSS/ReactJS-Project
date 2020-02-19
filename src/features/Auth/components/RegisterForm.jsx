import React from "react";
import { Form, Button } from "antd";

import FormField from "./FormField";
import styles from "../styles.module.scss";

const Register = props => (
  <div>
    <div className={styles.auth__title}>
      <h2 className={styles.auth__h2}>Регистрация</h2>
    </div>
    <div className={styles.auth__container}>
      <Form>
        <FormField name="Username" type="text" placeholder="Имя" icon="user" />
        <FormField
          name="Login"
          type="email"
          placeholder="Логин (e-mail)"
          icon="mail"
        />
        <FormField
          name="Password"
          type="password"
          placeholder="Пароль"
          icon="lock"
        />
        <FormField
          name="Password_confirm"
          type="password"
          placeholder="Повторите пароль"
          icon="lock"
        />
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className={styles.auth__button}
          >
            Создать аккаунт
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default Register;
