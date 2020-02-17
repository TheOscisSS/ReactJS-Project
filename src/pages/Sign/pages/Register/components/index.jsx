import React from "react";
import { Form, Button } from "antd";

// import { Button } from "components";
import Wrapper from "pages/Sign/components/Wrapper";
import FormField from "pages/Sign/components/FormField";
import styles from "pages/Sign/styles.module.scss";

const Register = props => (
  <div>
    <div className={styles.sign__title}>
      <h2>Регистрация</h2>
    </div>
    <Wrapper>
      <Form>
        <FormField name='Username' type='text' placeholder='Имя' icon='user' />
        <FormField
          name='Login'
          type='email'
          placeholder='Логин (e-mail)'
          icon='mail'
        />
        <FormField
          name='Password'
          type='password'
          placeholder='Пароль'
          icon='lock'
        />
        <FormField
          name='Password_confirm'
          type='password'
          placeholder='Повторите пароль'
          icon='lock'
        />
        <Form.Item>
          <Button
            type='primary'
            size='large'
            htmlType='submit'
            className={styles.sign__button}>
            Создать аккаунт
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  </div>
);

export default Register;
