import React from "react";
import { Form, Button } from "antd";

import Wrapper from "pages/Sign/components/Wrapper";
import FormField from "pages/Sign/components/FormField";
import styles from "pages/Sign/styles.module.scss";

const Register = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  return (
    <div>
      <div className={styles.title}>
        <h2 className={styles.title__h2}>Регистрация</h2>
      </div>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <FormField
            name="username"
            type="text"
            placeholder="Имя"
            icon="user"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
            hasFeedback
          />
          <FormField
            name="email"
            type="email"
            placeholder="Логин (e-mail)"
            icon="mail"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
            hasFeedback
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
            hasFeedback
          />
          <FormField
            name="password_confirm"
            type="password"
            placeholder="Повторите пароль"
            icon="lock"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
            hasFeedback
          />
          <Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={isSubmitting}
              className={styles.sign__button}
            >
              Создать аккаунт
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    </div>
  );
};

export default Register;
