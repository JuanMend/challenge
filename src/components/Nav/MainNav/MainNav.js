import React from "react";
import "./MainNav.css";

function MainNav(props) {
  return (
    <div className="container">
      <header className="main-nav">
        <div className="main-nav-title">
          <h1 className="title-h1">iFIT COACH</h1>
        </div>
        <ul className="main-nav-list">
          <li>EXERCISE</li>
          <li>NUTRITION</li>
          <li>ACTIVITY</li>
          <li>SLEEP</li>
        </ul>
        <button className="main-nav-btn">SIGN UP</button>
      </header>
    </div>
  );
}

export default MainNav;
