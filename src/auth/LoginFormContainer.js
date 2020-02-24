import { withFormik } from "formik";
import { connect } from "react-redux";

import { signIn } from "./authAction";
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

  handleSubmit: (values, { props, setSubmitting }) => {
    const { signIn, history, from } = props;

    signIn(values).then(() => {
      setSubmitting(false);
      history.replace(from);
    });
  }
})(Login);

const mapDispatch = {
  signIn
};

export default connect(null, mapDispatch)(LoginFormContainer);
