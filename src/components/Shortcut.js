import React from "react";
import HKSCDA_info from "../HKSCDA_animal_info.json";
import { Link as ReactLink } from "react-router-dom";

function Shortcut(props) {
  /*const shortCutSpecies = (input) => {
    props.setSelectedSpecies(input);
  };*/

  return (
    <div>
      {props.location === "Homepage" ? (
        <ReactLink
          to={{
            pathname: `/Category_Page`,
          }}
        >
          <div className="shortCut-outbox">
            <div className="shortCutButton-wrapper">
              <div className="shortCut-img">
                <img src="./icons/dog_icon.png" width="50px" alt="doggie"></img>
              </div>
              <div className="shortCut-text">
                {`待領養狗狗: ${HKSCDA_info.HKSCDA_dog.length}`}
              </div>
            </div>
          </div>
        </ReactLink>
      ) : (
        <div className="shortCut-outbox">
          <div className="shortCutButton-wrapper">
            <div className="shortCut-img">
              <img src="./icons/dog_icon.png" width="50px" alt="doggie"></img>
            </div>
            <div className="shortCut-text">
              {`待領養狗狗: ${HKSCDA_info.HKSCDA_dog.length}`}
            </div>
          </div>
        </div>
      )}

      {props.location === "Homepage" ? (
        <ReactLink
          to={{
            pathname: `/Category_Page`,
          }}
        >
          <div className="shortCut-outbox">
            <div className="shortCutButton-wrapper">
              <div className="shortCut-img">
                <img src="./icons/cat_icon.png" width="50px" alt="kitten"></img>
              </div>
              <div className="shortCut-text">
                {`待領養貓貓: ${HKSCDA_info.HKSCDA_cat.length}`}
              </div>
            </div>
          </div>
        </ReactLink>
      ) : (
        <div className="shortCut-outbox">
          <div className="shortCutButton-wrapper">
            <div className="shortCut-img">
              <img src="./icons/cat_icon.png" width="50px" alt="kitten"></img>
            </div>
            <div className="shortCut-text">
              {`待領養貓貓: ${HKSCDA_info.HKSCDA_cat.length}`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shortcut;
