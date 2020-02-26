import React, { useEffect } from "react";
import { Form, Button } from "antd";

import FormField from "shared/forms/FormField";
import styles from "./styles.module.scss";
import Notification from "./Notification";

const Register = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  authError,
  clearError,
  location
}) => {
  useEffect(() => {
    return () => {
      clearError();
    };
  }, [location]);

  return (
    <div>
      <div className={styles.auth__title}>
        <h2 className={styles.auth__h2}>Create a new account</h2>
      </div>
      <div className={styles.auth__container}>
        <Form onSubmit={handleSubmit}>
          <Notification
            className={styles.auth__notification}
            error={authError}
            message={authError}
            type='error'
          />
          <FormField
            name='username'
            type='text'
            placeholder='Username'
            icon='user'
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
            hasFeedback
          />
          <FormField
            name='email'
            type='text'
            placeholder='Login (Email)'
            icon='mail'
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
            hasFeedback
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
            hasFeedback
          />
          <FormField
            name='password_confirm'
            type='password'
            placeholder='Confirm password'
            icon='lock'
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
            hasFeedback
          />
          <Form.Item>
            <Button
              type='primary'
              size='large'
              htmlType='submit'
              loading={isSubmitting}
              className={styles.auth__button}>
              Create account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
