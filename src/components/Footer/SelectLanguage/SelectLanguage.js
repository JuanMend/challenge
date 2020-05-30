import React from "react";
// import "./SelectLanguage.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

function SelectLanguage(props) {
  return (
    <div>
      <div className="selectLanguage-container">
        <h1 className="language-h1">
          {/* <select
            value={props.language}
            onChange={(e) => props.handleSetLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Japanese">Japanese</option>
          </select> */}
          {/* <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" /> */}
        </h1>
      </div>
    </div>
  );
}

export default SelectLanguage;
