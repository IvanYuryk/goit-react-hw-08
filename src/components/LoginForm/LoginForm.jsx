import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations.js";

import { IoLogInOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";

import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (valuesFields, actions) => {
    dispatch(login(valuesFields));
    actions.resetForm();
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const registerUserSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email address is required")
      .email("You must enter valid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(7, "Your password must be greater than 7 characters!"),
  });

  return (
    <Formik
      validationSchema={registerUserSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.box}>
        <div className={css.fieldBox}>
          <label className={css.label} htmlFor={emailFieldId}>
            <HiOutlineMailOpen className={css.icon} />
            Email
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="mercer@gmail.com"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.fieldBox}>
          <label className={css.label} htmlFor={passwordFieldId}>
            <TbPasswordFingerprint className={css.icon} />
            Password
          </label>
          <Field
            className={css.field}
            type="password"
            name="password"
            placeholder="Enter your password"
            id={passwordFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>

        <button className={css.btn} type="submit">
          Log In
          <IoLogInOutline className={css.addIcon} />
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
