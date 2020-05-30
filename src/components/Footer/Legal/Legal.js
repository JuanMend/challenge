import React from "react";
import "./Legal.css";

function Legal(props) {
  let content = {
    English: {
      copyTitle: "All Rights Reserved",
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms of Use",
    },
    Japanese: {
      copyTitle: "全著作権所有",
      privacyTitle: "個人情報保護方針",
      termsTitle: "利用規約",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <div>
      <div className="legal-container">
        <ul className="legal-list">
          <li>© iFit.com.{content.copyTitle}.</li>
          <li>{content.privacyTitle}</li>
          <li>{content.termsTitle}</li>
        </ul>
      </div>
    </div>
  );
}

export default Legal;
