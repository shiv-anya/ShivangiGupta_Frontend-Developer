import { Fragment, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import classes from "./DataGrid.module.css";
import Capsules from "./Capsules";

const DataGrid = () => {
  const [capsules, setCapsules] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/capsules")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCapsules(data);
      });
  }, []);
  return (
    <Fragment>
      <div className={classes.container}>
        <SearchBar />
        <Capsules capsules={capsules} />
      </div>
    </Fragment>
  );
};

export default DataGrid;
