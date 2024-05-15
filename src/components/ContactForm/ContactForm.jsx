import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
    number: Yup.string()
      .required("Required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
  });

  return (
    <div className={css.addCont}>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.myForm}>
          <label>
            <span>Name:</span>
            <br />
            <Field type="text" id="name" name="name" autoComplete="on" />
            <ErrorMessage className={css.error} name="name" component="div" />
          </label>
          <br />
          <label>
            <span>Number:</span>
            <br />
            <Field type="text" id="number" name="number" autoComplete="on" />
            <ErrorMessage className={css.error} name="number" component="div" />
          </label>
          <br />
          <button className={css.addBtn} type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
