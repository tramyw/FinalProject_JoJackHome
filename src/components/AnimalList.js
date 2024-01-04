import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";

function AnimalList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 16;
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const items = props.data.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(props.data.length / 16);
  const pageNum = [...Array(numberOfPages + 1).keys()].slice(1);

  console.log(props.data);

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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageList cols={4}>
          {items.map((el) => (
            <Link
              to={{
                pathname: `/Category_Page/${el.name}`,
                state: { el },
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageListItem key={el.name}>
                <img
                  srcSet={`${el.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${el.image}?w=248&fit=crop&auto=format`}
                  alt={el.name}
                  loading="lazy"
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    width: "280px",
                    height: "280px",
                  }}
                />
                <ImageListItemBar
                  title={el.name}
                  subtitle={
                    <span>
                      {el.gender} {el.age}
                    </span>
                  }
                  position="below"
                  style={{ textAlign: "center" }}
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
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
