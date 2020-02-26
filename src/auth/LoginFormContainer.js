import { withFormik } from "formik";
import { connect } from "react-redux";

import { signIn, clearError } from "./authAction";
import Login from "./LoginForm";

const LoginFormContainer = withFormik({
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

  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const { signIn } = props;

    signIn(values).then(result => {
      setSubmitting(false);

      if (result.type === "error") {
        resetForm();
      }
    });
  }
})(Login);

const mapState = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatch = {
  signIn,
  clearError
};

export default connect(mapState, mapDispatch)(LoginFormContainer);
