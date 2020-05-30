import React from "react";
import "./Hero.css";

function Hero(props) {
  let content = {
    English: {
      title: "The best personal training, right in your own home",
      buttonHero: "Join iFit Coach",
    },
    Japanese: {
      title: "ご自宅で最高のパーソナルトレーニング",
      buttonHero: "iFitコーチに参加",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <div>
      <div className="hero-img">
        <div className="hero-small-description">
          <h2 className="hero-h2">{content.title}</h2>
          <button className="join-coach-btn">{content.buttonHero}</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
