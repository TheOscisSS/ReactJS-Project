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
    props.signIn(values).then(({ status }) => {
      setSubmitting(false);
      console.log(status);
      console.log(props);
      if (status === "success") {
        props.history.push(props.location);
      }
    });
  }
})(Login);

const mapDispatch = {
  signIn
};

export default connect(null, mapDispatch)(LoginFormContainer);
