import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

import Contact from "../Contact/Contact.jsx";

import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
