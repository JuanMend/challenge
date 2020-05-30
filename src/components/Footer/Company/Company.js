import React from "react";
import "./Company.css";

function Company(props) {
  let content = {
    English: {
      company: "Company",
      about: "About",
      contact: "Contact Us",
      careers: "Careers",
    },
    Japanese: {
      company: "会社",
      about: "約",
      contact: "お問い合わせ",
      careers: "キャリア",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <div>
      <div className="company-container">
        <ul className="company-list">
          <li className="active-li">{content.company}</li>
          <li>{content.about}</li>
          <li>{content.contact}</li>
          <li>{content.careers}</li>
        </ul>
      </div>
    </div>
  );
}

export default Company;
