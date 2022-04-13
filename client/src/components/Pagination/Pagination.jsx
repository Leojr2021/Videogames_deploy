import React from "react";
// import { useSelector } from "react-redux";
import "./Pagination.css";

export const Pagination = ({ videogamesPerPage, totalVideogames, paginate }) => {
  const pageNumbers = [];
  const numOfPages = Math.ceil(totalVideogames / videogamesPerPage)
  // const currentPageNum = useSelector((store) => store.currentPage);

  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
        {pageNumbers.map((num) => (
          <div key={num} className="item">
            <button onClick={(e) => paginate(e, num)}>
              {num}
            </button>
          </div>
        ))}
        {/* <button onClick={(e) => paginate(e, currentPageNum+1)}>
              Next
            </button> */}
    </nav>
  );
};