import {
   withFormik
} from "formik";

import Login from "../components";

export default withFormik({
   mapPropsToValues: () => ({
      email: "",
      password: ""
   }),

   validate: values => {
      let errors = {};

      if (!values.email) {
         errors.email = "Введите e-mail";
      }

      if (!values.password) {
         errors.password = "Введите пароль";
      }

      return errors;
   },

   handleSubmit: (values, {
      setSubmitting
   }) => {
      setTimeout(() => {
         alert(JSON.stringify(values));
         setSubmitting(false);
      }, 1000);
   },

})(Login);