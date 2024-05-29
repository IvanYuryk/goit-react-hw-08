import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

import { IoLogOutOutline } from "react-icons/io5";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  return (
    <div className={css.userMenu}>
      <p className={css.greeting}>Welcome, {userData.name}</p>
      <button
        className={css.button}
        onClick={() => dispatch(logout())}
        type="button"
      >
        Logout <IoLogOutOutline className={css.addIcon} />
      </button>
    </div>
  );
};

export default UserMenu;
