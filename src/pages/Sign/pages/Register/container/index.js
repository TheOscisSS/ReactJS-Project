import { withFormik } from "formik";

import Register from "../components";

export default withFormik({
  mapPropsToValues: () => ({
    username: "",
    email: "",
    password: "",
    password_confirm: ""
  }),

  validate: values => {
    let errors = {};

    if (!values.username) {
      errors.username = "Обязательно";
    } else if (values.username.length < 5) {
      errors.username = "Имя не может быть меньше 5 символов";
    }

    if (!values.email) {
      errors.email = "Обязательно";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Неверный email адрес";
    }

    if (!values.password) {
      errors.password = "Обязательно";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)
    ) {
      errors.password = "Слишком простой пароль";
    }

    if (!values.password_confirm) {
      errors.password_confirm = "Обязательно";
    } else if (values.password !== values.password_confirm) {
      errors.password_confirm = "Пароли не совпадают";
    }

    return errors;
  }
})(Register);
