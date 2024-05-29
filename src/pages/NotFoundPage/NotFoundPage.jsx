import { Link } from "react-router-dom";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.position}>
      <h1>Page you visited does not exist.</h1>
      <Link to="/" className={css.link}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
