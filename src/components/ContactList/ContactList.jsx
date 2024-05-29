import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

import Contact from "../Contact/Contact.jsx";
import RedactModal from "../RedactModal/RedactModal.jsx";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";

import css from "./ContactList.module.css";

const ContactList = () => {
  const [menuContact, setMenuContact] = useState(null);
  const [redactModal, setRedactModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={css.contactCard} key={id}>
              <Contact
                id={id}
                name={name}
                number={number}
                menuContact={menuContact}
                setMenuContact={setMenuContact}
                setRedactModal={setRedactModal}
                setDeleteModal={setDeleteModal}
              />
            </li>
          );
        })}
      </ul>
      <RedactModal redactModal={redactModal} setRedactModal={setRedactModal} />
      <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
    </>
  );
};

export default ContactList;
