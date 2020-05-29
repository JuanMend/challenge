import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <div>
      <div className="hero-img">
        <div className="hero-small-description">
          <h2 className="hero-h2">
            The best personal training, right in your own home
          </h2>
          <button className="join-coach-btn">Join iFit Coach</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
