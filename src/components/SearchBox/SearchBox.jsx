import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={css.box}>
      <input
        className={css.input}
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleChange}
      />
    </label>
  );
};

export default SearchBox;