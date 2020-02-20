import { withFormik } from "formik";

import Login from "./LoginForm";

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),

  validate: values => {
    let errors = {};

    if (!values.email) {
      errors.email = "Enter email";
    }

    if (!values.password) {
      errors.password = "Enter password";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
      setSubmitting(false);
    }, 1000);
  }
})(Login);
