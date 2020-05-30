import React from "react";
import "./DesktopLibrary.css";

// All Images for Desktop Library
import Timer from "../../../images/timer.png";
import LakeWoman from "../../../images/lake-woman-big.png";
import LakeWomanSmall from "../../../images/lake-woman-small.png";
import PerformanceBig from "../../../images/performance-big.png";
import PerformanceSmall from "../../../images/performance-small.png";
import SlowPullBig from "../../../images/slow-pulls-big.png";
import SlowPullSmall from "../../../images/slow-pulls-small.png";
import TonedBig from "../../../images/toned-big.png";
import TonedSmall from "../../../images/toned-small.png";
import RaceBig from "../../../images/race-big.png";
import RaceSmall from "../../../images/race-small.png";
import FullBodyBig from "../../../images/full-body-big.png";
import FullBodySmall from "../../../images/full-body-small.png";
import RiverBig from "../../../images/river-big.png";
import RiverSmall from "../../../images/river-small.png";
import ShredBig from "../../../images/shred-big.png";
import ShredSmall from "../../../images/shred-small.png";

function DesktopLibrary(props) {
  let content = {
    English: {
      firstCard: "Lake Inniscarra, Ireland-Pyramid",
      secondCard: "Performance Series",
      thirdCard: "Slow Pulls and Fast Intervals",
      fourthCard: "20 Minutes of Toned",
      fifthCard: "Charles Race, Boston, Massachusetts",
      sixthCard: "Full-Body HIIT Series",
      seventhCard: "Kafue River, Zambia-Power Stroke Pyramid",
      eigthCard: "Shred & Burn Series",
    },
    Japanese: {
      firstCard: "イニスカラ湖、アイルランド-ピラミッド",
      secondCard: "パフォーマンスシリーズ",
      thirdCard: "遅いプルと速い間隔",
      fourthCard: "トーンの20分",
      fifthCard: "チャールズレース、マサチューセッツ州ボストン",
      sixthCard: "フルボディHIITシリーズ",
      seventhCard: "カフエ川、ザンビア-パワーストロークピラミッド",
      eigthCard: "シュレッド＆バーンシリーズ",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  return (
    <div>
      <section className="desktop-section">
        {/* First Row */}
        <div className="inside-desktop-section">
          <div className="desktop-row">
            <img src={LakeWoman} className="photo" />
            <div className="desktop-content">
              <div className="inside-content">
                <h3 className="card-title">{content.firstCard}</h3>
                <img className="photo-small" src={LakeWomanSmall} />
              </div>
              <div className="stats">
                <img src={Timer} className="timer" />
                <span>30:54</span>
                <img src={Timer} className="timer" />
                <span>6,434 M</span>
              </div>
              {/* <h1 className="details-view">View Details</h1> */}
            </div>
          </div>
          {/* Second Card */}
          <div className="desktop-row">
            <img src={PerformanceBig} className="photo" />
            <div className="desktop-content">
              <div className="inside-content">
                <h3 className="card-title">{content.secondCard}</h3>
                <img className="photo-small" src={PerformanceSmall} />
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="desktop-row">
            <img src={SlowPullBig} className="photo" />
            <div className="desktop-content">
              <div className="inside-content">
                <h3 className="card-title">{content.thirdCard}</h3>
                <img className="photo-small" src={SlowPullSmall} />
              </div>
              <div className="stats">
                <img src={Timer} className="timer" />
                <span>30:54</span>
                <img src={Timer} className="timer" />
                <span>6,434 M</span>
              </div>
            </div>
          </div>
          {/* Fourth Card */}
          <div className="desktop-row">
            <img src={TonedBig} className="photo" />
            <div className="desktop-content">
              <div className="inside-content">
                <h3 className="card-title">{content.fourthCard}</h3>
                <img className="photo-small" src={TonedSmall} />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="desktop-row">
            <img src={RaceBig} className="photo" />
            <div className="desktop-content">
              <div className="inside-content">
                <h3 className="card-title">{content.fifthCard}</h3>
                <img className="photo-small" src={RaceSmall} />
              </div>
              <div className="stats">
                <img src={Timer} className="timer" />
                <span>30:54</span>
                <img src={Timer} className="timer" />
                <span>6,434 M</span>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="desktop-row">
            <img src={FullBodyBig} className="photo" />
            <div className="desktop-content">
              <div className="inside-content">
                <h3 className="card-title">{content.sixthCard}</h3>
                <img className="photo-small" src={FullBodySmall} />
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="desktop-row">
            <img src={RiverBig} className="photo" />
            <div className="desktop-content">
              <div className="inside-content">
                <h3 className="card-title">{content.seventhCard}</h3>
                <img className="photo-small" src={RiverSmall} />
              </div>
              <div className="stats">
                <img src={Timer} className="timer" />
                <span>30:54</span>
                <img src={Timer} className="timer" />
                <span>6,434 M</span>
              </div>
            </div>
          </div>
          {/* Fourth Card */}
          <div className="desktop-row">
            <img src={ShredBig} className="photo" />
            <div className="desktop-content">
              <div className="inside-content">
                <h3 className="card-title">{content.eigthCard}</h3>
                <img className="photo-small" src={ShredSmall} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesktopLibrary;
