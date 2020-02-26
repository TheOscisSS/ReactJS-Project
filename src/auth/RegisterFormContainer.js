import { withFormik } from "formik";
import { connect } from "react-redux";

import { signUp, clearError } from "./authAction";
import Register from "./RegisterForm";

const RegisterFormContainer = withFormik({
  mapPropsToValues: () => ({
    username: "",
    email: "",
    password: "",
    password_confirm: ""
  }),

  validate: values => {
    let errors = {};

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 5) {
      errors.username = "Username less then 5 characters";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)
    ) {
      errors.password = "Password is too easy";
    }

    if (!values.password_confirm) {
      errors.password_confirm = "Required";
    } else if (values.password !== values.password_confirm) {
      errors.password_confirm = "Passwords don't match";
    }

    return errors;
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    const { signUp } = props;

    signUp(values).then(() => {
      setSubmitting(false);
    });
  }
})(Register);

const mapState = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatch = {
  signUp,
  clearError
};

export default connect(mapState, mapDispatch)(RegisterFormContainer);
