import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ capsulesPerPage, totalCapsules, paginate }) => {
  console.log(capsulesPerPage, totalCapsules);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCapsules / capsulesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={classes.pagination}>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
