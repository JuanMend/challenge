import React, {useState} from "react";
import "./Footer.css";

import Company from "../Company/Company";
import Account from "../Account/Account";
import Support from "../Support/Support";
import Social from "../Social/Social";
import Legal from "../Legal/Legal";

function Footer(props) {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  return (
    <div>
      <section className="footer-section">
        <div className="footer-row">
          <div className="inside-footer-row">
            {/* Company Links */}
            <Company language={language} />
            <Account language={language} />
            <Support language={language} />
          </div>
        </div>
        {/* Company Social */}
        <div className="footer-social">
          <Social />
        </div>
        <div className="footer-legal">
          {/* Company Set Languages */}
          <div className="selector-language-div">
            <select
              className="select-language"
              value={props.language}
              onChange={(e) => props.handleSetLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Japanese">Japanese</option>
            </select>
          </div>
          {/* Company Legal */}
          <Legal language={language} />
        </div>
      </section>
    </div>
  );
}
function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default Footer;
