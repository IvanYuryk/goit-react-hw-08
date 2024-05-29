import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations.js";

import { IoClose } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { RiContactsLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";

import Modal from "react-modal";

import css from "./RedactModal.module.css";

const RedactModal = ({ redactModal, setRedactModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    setRedactModal(null);
    dispatch(updateContact({ id: redactModal.id, ...values }));
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
    <Modal
      isOpen={Boolean(redactModal)}
      overlayClassName="ReactModal__Overlay"
      className="ReactModal__Content"
      closeTimeoutMS={300}
      onRequestClose={() => {
        setRedactModal(null);
      }}
      ariaHideApp={false}
    >
      <button className={css.closeBtn} onClick={() => setRedactModal(null)}>
        <IoClose className={css.closeIcon} />
      </button>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: redactModal && redactModal.name,
          number: redactModal && redactModal.number,
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
              id={nameFieldId}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.fieldBox}>
            <label className={css.label} htmlFor={numberFieldId}>
              <FiPhone className={css.icon} />
              Number
            </label>
            <Field
              className={css.field}
              type="number"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button className={css.btn} type="submit">
            Update Contact
            <TiContacts className={css.addIcon} />
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default RedactModal;
