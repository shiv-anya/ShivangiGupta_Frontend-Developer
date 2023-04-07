import classes from "./Capsules.module.css";
import Capsule from "./Capsule";
import { Fragment, useEffect, useState } from "react";
import Pagination from "./Pagination";

const Capsules = (props) => {
  const capsules = props.capsules;
  const [currentPage, setCurrentPage] = useState(1);
  const capsulesPerPage = 10;
  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = capsules.slice(
    indexOfFirstCapsule,
    indexOfLastCapsule
  );
  const paginate = (pageNumber, e) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {}, [currentCapsules]);
  return (
    <Fragment>
      <section className={classes.capsules}>
        {currentCapsules &&
          currentCapsules.map((capsule) => {
            return (
              <Capsule
                serial={capsule.serial}
                status={capsule.status}
                type={capsule.type}
                key={capsule.id}
              />
            );
          })}
      </section>
      <Pagination
        capsulesPerPage={capsulesPerPage}
        totalCapsules={capsules.length}
        paginate={paginate}
      />
    </Fragment>
  );
};

export default Capsules;
