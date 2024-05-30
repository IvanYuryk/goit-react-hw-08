import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations.js";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { TiContacts } from "react-icons/ti";
import { RiContactsLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (valuesFields, actions) => {
    dispatch(addContact(valuesFields));
    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
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
            <label className={css.label} htmlFor={numberFieldId}>
              <FiPhone className={css.icon} />
              Number
            </label>
            <PhoneInput
              country={'us'}
              value={values.number}
              onChange={value => setFieldValue('number', value)}
              inputClass={css.phoneInput}
              containerClass={css.phoneInputContainer}
              buttonClass={css.phoneInputButton}
              dropdownClass={css.phoneInputDropdown}
            />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>

          <button className={css.btn} type="submit">
            Add Contact
            <TiContacts className={css.addIcon} />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
