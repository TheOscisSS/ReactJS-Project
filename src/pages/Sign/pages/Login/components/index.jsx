import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "antd";

import Wrapper from "pages/Sign/components/Wrapper";
import FormField from "pages/Sign/components/FormField";
import styles from "pages/Sign/styles.module.scss";

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
    <div className={styles.title}>
      <h2 className={styles.title__h2}>Вход</h2>
    </div>
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormField
          name="email"
          type="text"
          placeholder="Логин (e-mail)"
          icon="mail"
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          hasFeedback={!values.email}
        />
        <FormField
          name="password"
          type="password"
          placeholder="Пароль"
          icon="lock"
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          hasFeedback={!values.password}
        />
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={isSubmitting}
            className={styles.sign__button}
          >
            Войти
          </Button>
        </Form.Item>
        <Form.Item>
          <div className={styles.sign__other}>
            <Link to="signup">Регистрация</Link>
            <Link to="forgot">Забыли пароль?</Link>
          </div>
        </Form.Item>
      </Form>
    </Wrapper>
  </div>
);

export default Login;
