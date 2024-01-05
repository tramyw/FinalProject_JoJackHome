import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AnimalList.module.css";

function AnimalList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(calculateItemsPerPage());
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const items = props.data.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(props.data.length / itemPerPage);
  const pageNum = [...Array(numberOfPages + 1).keys()].slice(1);

  useEffect(() => {
    function handleResize() {
      setItemPerPage(calculateItemsPerPage());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //console.log(props.data);

  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCurrentPage(chosenPage) {
    setCurrentPage(chosenPage);
  }

  function nextPage() {
    if (currentPage !== pageNum.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  function calculateItemsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 16; // Show 16 items per page for large screens
    } else if (screenWidth >= 960) {
      return 12; // Show 12 items per page for medium screens
    } else {
      return 8; // Show 8 items per page for small screens
    }
  }
  return (
    <div>
      <div className={styles["image-list-container"]}>
        <div className={styles["image-list"]}>
          {items.map((el) => (
            <Link
              key={el.name}
              to={{
                pathname: `/Category_Page/${el.name}`,
              }}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className={styles["listItem"]}>
                <div className={styles["image-container"]}>
                  <img
                    src={`${el.image}?w=248&fit=crop&auto=format`}
                    alt={el.name}
                    loading="lazy"
                    className={styles["bio-image"]}
                  />
                </div>

                <div className={styles["image-details"]}>
                  <div className={styles["bio-details-wrapper"]}>
                    <h3 className={styles["bioName"]}>{el.name}</h3>
                    <span className={styles["bio-gender-age"]}>
                      {el.gender} {el.age}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <nav>
        <ul
          className="pagination"
          style={{
            display: "flex",
            listStyleType: "none",
            justifyContent: "space-around",
          }}
        >
          <li className="page-item">
            <a
              href="#"
              className="page-item"
              onClick={previousPage}
              style={{ textDecoration: "none" }}
            >
              {currentPage === 1 || numberOfPages === 0 ? "  " : "🐕⏪"}
            </a>
          </li>

          {pageNum.map((eachAnimal, index) => (
            <div>
              <li
                className={`page-item ${
                  currentPage === eachAnimal ? "active" : ""
                }`}
                key={index}
              >
                <a
                  href="#"
                  className="page-item"
                  onClick={() => changeCurrentPage(eachAnimal)}
                  style={{ textDecoration: "none" }}
                >
                  {eachAnimal}
                </a>
              </li>
            </div>
          ))}
          <li className="page-item">
            <a
              href="#"
              className="page-item"
              onClick={nextPage}
              style={{ textDecoration: "none" }}
            >
              {currentPage === pageNum.length || numberOfPages === 0
                ? "  "
                : "⏩🐈"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AnimalList;
