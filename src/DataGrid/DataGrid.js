import { Fragment, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import classes from "./DataGrid.module.css";
import Capsules from "./Capsules";

const DataGrid = () => {
  const [allCapsules, setAllCapsules] = useState([]);
  const [capsules, setCapsules] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/capsules")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllCapsules(data);
        setCapsules(data);
      });
  }, []);
  const changeCapsuleDataHandler = (newData) => {
    let capsuleNewData;
    if (newData.status === "all") {
      capsuleNewData = [...allCapsules];
    } else
      capsuleNewData = [...allCapsules].filter(
        (capsule) => capsule.status === newData.status
      );
    if (newData.type.toLowerCase().length !== 0)
      capsuleNewData = capsuleNewData.filter(
        (capsule) => capsule.type.toLowerCase() === newData.type.toLowerCase()
      );
    if (newData.serial.toLowerCase().length !== 0)
      capsuleNewData = capsuleNewData.filter(
        (capsule) =>
          capsule.serial.toLowerCase() === newData.serial.toLowerCase()
      );
    console.log(newData.type.toLowerCase());
    setCapsules(capsuleNewData);
  };
  return (
    <Fragment>
      <div className={classes.container}>
        <SearchBar onChangeCapsules={changeCapsuleDataHandler} />
        <Capsules capsules={capsules} />
      </div>
    </Fragment>
  );
};

export default DataGrid;
