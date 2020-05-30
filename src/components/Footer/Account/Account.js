import React from "react";
import "./Account.css";

function Account(props) {
  let content = {
    English: {
      account: "Account",
      login: "Log In",
      createAccount: "Create Account",
    },
    Japanese: {
      account: "アカウント",
      login: "ログインする",
      createAccount: "アカウントを作成する",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <div>
      <div className="account-container">
        <ul className="account-list">
          <li className="active-li">{content.account}</li>
          <li>{content.login}</li>
          <li>{content.createAccount}</li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
