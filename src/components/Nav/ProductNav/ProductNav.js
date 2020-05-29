import React from "react";
import "./ProductNav.css";

function ProductNav(props) {
  return (
    <div className="container">
      <header className="product-nav">
        <ul className="product-list">
          <li>BLOG</li>
          <li>NOURAGE</li>
          <li>SHOP</li>
        </ul>
      </header>
    </div>
  );
}

export default ProductNav;
