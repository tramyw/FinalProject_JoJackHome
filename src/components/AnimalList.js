import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AnimalList.module.css";
import { motion } from "framer-motion";

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

  const cardVariants = {
    offscreen: {
      y: 385,
    },
    onscreen: {
      y: 130,

      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
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
              <div className={styles["image-wrapper"]}>
                <motion.div
                  animate={{ y: [-50, -80, -70] }}
                  transition={{ ease: "easeOut", duration: 2 }}
                >
                  <motion.button
                    className={styles["motion-button"]}
                    variants={cardVariants}
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      // y: 0,
                      scale: 1.1,

                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <img
                      src={`${el.image}?w=248&fit=crop&auto=format`}
                      alt={el.name}
                      className={styles["bio-image"]}
                    ></img>
                  </motion.button>
                </motion.div>
                <div className={styles["image-details"]}>
                  <img
                    className={styles["paper-box"]}
                    src="./Imgs/paperBox.svg"
                    alt="paper box"
                  ></img>
                  <div className={styles["pet-info"]}>
                    {/* Name, gender and age */}
                    <div className={styles["bioName"]}>{el.name}</div>
                    <div className={styles["more-details"]}>
                      <div className={styles["bio-gender-age"]}>
                        {el.gender === "女" ? (
                          <img
                            className={styles["gender-icon"]}
                            src="./icons/female.svg"
                            alt="female"
                          ></img>
                        ) : (
                          <img
                            className={styles["gender-icon"]}
                            src="./icons/male.svg"
                            alt="male"
                          ></img>
                        )}
                        {el.age}
                      </div>
                    </div>
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
