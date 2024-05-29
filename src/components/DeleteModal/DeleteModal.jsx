import { deleteContact } from "../../redux/contacts/operations.js";
import { useDispatch } from "react-redux";

import Modal from "react-modal";

import css from "./DeleteModal.module.css";

const DeleteModal = ({ deleteModal, setDeleteModal }) => {
  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={Boolean(deleteModal)}
      overlayClassName="ReactModal__Overlay"
      className="ReactModal__Content"
      closeTimeoutMS={300}
      onRequestClose={() => {
        setDeleteModal(null);
      }}
      ariaHideApp={false}
    >
      <p className={css.question}>Do you really want to delete the contact?</p>
      <div className={css.boxBtn}>
        <button
          className={css.modalBtn}
          onClick={() => {
            setDeleteModal(null);
            dispatch(deleteContact(deleteModal));
          }}
        >
          Yes
        </button>
        <button
          className={css.modalBtn}
          onClick={() => {
            setDeleteModal(null);
          }}
        >
          No
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
