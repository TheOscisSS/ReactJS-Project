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
  handleSubmit,
  handleReset,
  dirty
}) => (
  <div>
    <div className={styles.sign__title}>
      <h2>Регистрация</h2>
    </div>
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormField
          name='username'
          type='text'
          placeholder='Имя'
          icon='user'
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values.username}
        />
        <FormField
          name='email'
          type='email'
          placeholder='Логин (e-mail)'
          icon='mail'
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values.email}
        />
        <FormField
          name='password'
          type='password'
          placeholder='Пароль'
          icon='lock'
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values.password}
        />
        <FormField
          name='password_confirm'
          type='password'
          placeholder='Повторите пароль'
          icon='lock'
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values.password_confirm}
        />
        <Form.Item>
          <Button
            type='primary'
            size='large'
            htmlType='submit'
            disabled={isSubmitting}
            className={styles.sign__button}>
            Создать аккаунт
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  </div>
);

export default Register;
