import { useState } from "react";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js";

import { LuUserPlus2 } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (valuesFields, actions) => {
    dispatch(register(valuesFields));
    actions.resetForm();
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const registerUserSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(38, "Your user name must be less than 38 characters!"),
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
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.box}>
        <div className={css.fieldBox}>
          <label className={css.label} htmlFor={nameFieldId}>
            <RiContactsLine className={css.icon} />
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Jacob Mercer"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

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
          <div className={css.passwordWrapper}>
            <Field
              className={css.field}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              id={passwordFieldId}
            />
            <button
              type="button"
              className={css.eyeIcon}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <ErrorMessage className={css.error} name="password" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Register
          <LuUserPlus2 className={css.addIcon} />
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
