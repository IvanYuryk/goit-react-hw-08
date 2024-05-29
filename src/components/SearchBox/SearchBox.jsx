import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice.js";
import { selectNameFilter } from "../../redux/filters/selectors.js";

import { TbSearch } from "react-icons/tb";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={css.box}>
      <span className={css.text}>
        <TbSearch className={css.icon} />
        Find contacts by name or number
      </span>
      <input
        className={css.input}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
    </label>
  );
};

export default SearchBox;
