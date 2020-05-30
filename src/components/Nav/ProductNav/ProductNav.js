import React from "react";
import "./ProductNav.css";

function ProductNav(props) {
  let content = {
    English: {
      prodOne: "BLOG",
      prodTwo: "NOURAGE",
      prodThree: "SHOP",
    },
    Japanese: {
      prodOne: "ブログ",
      prodTwo: "ナレッジ",
      prodThree: "ショップ",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <div className="container">
      <header className="product-nav">
        <ul className="product-list">
          <li>{content.prodOne}</li>
          <li>{content.prodTwo}</li>
          <li>{content.prodThree}</li>
        </ul>
      </header>
    </div>
  );
}

export default ProductNav;
