import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "antd";

import FormField from "./FormField";
import styles from "../styles.module.scss";

const Login = props => (
  <div>
    <div className={styles.auth__title}>
      <h2 className={styles.auth__h2}>Вход</h2>
    </div>
    <div className={styles.auth__container}>
      <Form>
        <FormField
          name="Username"
          type="text"
          placeholder="Имя пользователя"
          icon="user"
        />
        <FormField
          name="Password"
          type="password"
          placeholder="Пароль"
          icon="lock"
        />
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className={styles.auth__button}
          >
            Войти
          </Button>
        </Form.Item>
        <Form.Item>
          <div className={styles.auth__other}>
            <Link to="signup">Регистрация</Link>
            <Link to="forgot">Забыли пароль?</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default Login;
