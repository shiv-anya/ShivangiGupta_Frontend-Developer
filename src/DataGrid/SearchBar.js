import classes from "./SearchBar.module.css";
import { useRef } from "react";

const SearchBar = () => {
  const statusInputRef = useRef();
  const serialInputRef = useRef();
  const typeInputRef = useRef();
  const changeCapsulesHandler = (e) => {
    e.preventDefault();
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
            <option value="retired">Retired</option>
            <option value="active">Active</option>
            <option value="unknown">Unknown</option>
            <option value="destroyed">Destroyed</option>
          </select>
          <button>Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
