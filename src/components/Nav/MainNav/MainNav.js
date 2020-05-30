import React from "react";
import "./MainNav.css";

function MainNav(props) {
  let content = {
    English: {
      linkOne: "EXERCISE",
      linkTwo: "NUTRITION",
      linkThree: "ACTIVITY",
      linkFour: "SLEEP",
      signUp: "SIGN UP",
    },
    Japanese: {
      linkOne: "運動",
      linkTwo: "栄養",
      linkThree: "アクティビティ",
      linkFour: "睡眠",
      signUp: "サインアップ",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <div className="container">
      <header className="main-nav">
        <div className="main-nav-title">
          <h1 className="title-h1">iFIT COACH</h1>
        </div>
        <ul className="main-nav-list">
          <li>{content.LinkOne}</li>
          <li>{content.linkTwo}</li>
          <li>{content.linkThree}</li>
          <li>{content.linkFour}</li>
        </ul>
        <button className="main-nav-btn">{content.signUp}</button>
      </header>
    </div>
  );
}

export default MainNav;
