import classes from "./SearchBar.module.css";
import { useRef } from "react";

const SearchBar = (props) => {
  const statusInputRef = useRef();
  const serialInputRef = useRef();
  const typeInputRef = useRef();
  const changeCapsulesHandler = (e, data) => {
    e.preventDefault();
    const capsuleNewData = {
      serial: serialInputRef.current.value,
      status: statusInputRef.current.value,
      type: typeInputRef.current.value,
    };
    props.onChangeCapsules(capsuleNewData);
  };
  return (
    <section>
      <div className={classes.search}>
        <form onSubmit={changeCapsulesHandler}>
          <input
            type="text"
            placeholder="Search by Serial Id"
            ref={serialInputRef}
          />
          <input type="text" placeholder="Search by type" ref={typeInputRef} />
          <select ref={statusInputRef}>
            <option value="all">All</option>
            <option value="retired">Retired</option>
            <option value="active">Active</option>
            <option value="unknown">Unknown</option>
            <option value="destroyed">Destroyed</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
