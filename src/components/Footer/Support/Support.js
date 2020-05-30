import React from "react";
import "./Support.css";

function Support(props) {
  let content = {
    English: {
      support: "Support",
      helpCenter: "Help Center",
      accessibility: "Accessibility",
    },
    Japanese: {
      support: "サポート",
      helpCenter: "ヘルプセンター",
      accessibility: "アクセシビリティ",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <div>
      <div className="support-container">
        <ul className="support-list">
          <li className="active-li">{content.support}</li>
          <li>{content.helpCenter}</li>
          <li>{content.accessibility}</li>
        </ul>
      </div>
    </div>
  );
}

export default Support;
