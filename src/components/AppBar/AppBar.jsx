import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import clsx from "clsx";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation buildLinkClass={buildLinkClass} />
      {isLoggedIn ? <UserMenu /> : <AuthNav buildLinkClass={buildLinkClass} />}
    </header>
  );
};

export default AppBar;
