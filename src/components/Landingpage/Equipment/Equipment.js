import React from "react";
import "./Equipment.css";

import Treadmills from "../../../images/woman-treadmill.png";
import Bikes from "../../../images/bikes.png";
import Ellipticals from "../../../images/ellipticals.png";
import Strength from "../../../images/strength.png";

function Equipment(props) {
  let content = {
    English: {
      equipmentTitle: "Interested in our iFit-enabled equipment",
      treadmillCard: "Treadmills",
      bikesCard: "Bikes",
      ellipticalsCard: "Ellipticals",
      strengthCard: "Strength",
    },
    Japanese: {
      equipmentTitle: "iFit対応機器に興味がある",
      treadmillCard: "トレッドミル",
      bikesCard: "バイク",
      ellipticalsCard: "楕円形",
      strengthCard: "力",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <div>
      <section className="equipment-section">
        <div className="equipment-title">
          <h3 className="equipment-h3">{content.equipmentTitle}?</h3>
        </div>
        <div className="equipment-card">
          <div className="equipment-content">
            <img src={Treadmills} className="equipment-photo" />
            <h1>{content.treadmillCard}</h1>
          </div>
          {/* Second Card */}
          <div className="equipment-content">
            <img src={Bikes} className="equipment-photo" />
            <h1>{content.bikesCard}</h1>
          </div>
          {/* Third Card */}
          <div className="equipment-content">
            <img src={Ellipticals} className="equipment-photo" />
            <h1>{content.ellipticalsCard}</h1>
          </div>
          {/* Fourth Card */}
          <div className="equipment-content">
            <img src={Strength} className="equipment-photo" />
            <h1>{content.strengthCard}</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Equipment;
