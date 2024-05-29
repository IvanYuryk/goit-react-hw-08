import { NavLink } from "react-router-dom";

import css from "./AuthNav.module.css";

const AuthNav = ({ buildLinkClass }) => {
  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
