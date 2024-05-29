import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations.js";
import {
  selectError,
  selectLoading,
  selectContacts,
} from "../../redux/contacts/selectors.js";

import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import ErrorMessage from "../../components/ErrorMassage/ErrorMessage.jsx";

import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.box}>
        <div className={css.asideBar}>
          <ContactForm />
          <SearchBox />
        </div>
        <div className={css.contactsBox}>
          <Loader loading={loading} />
          {contacts !== null && contacts.length !== 0 ? (
            <ContactList />
          ) : (
            <b className={css.notContacts}>
              You have not added any contact yet
            </b>
          )}
          {error && <ErrorMessage />}
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
