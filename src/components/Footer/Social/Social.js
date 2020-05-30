import React from "react";
import "./Social.css";

// Icons from fontawesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faPinterestP} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

function Social() {
  return (
    <div>
      <div className="social-container">
        <ul className="social-list border-gradient">
          <li>
            <FontAwesomeIcon icon={faYoutube} className="youtube-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faPinterestP} className="pinterest-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Social;
