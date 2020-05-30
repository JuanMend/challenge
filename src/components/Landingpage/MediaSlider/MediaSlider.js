import React from "react";
import "./MediaSlider.css";

function MediaSlider(props) {
  let content = {
    English: {
      titleOne: "GEAJUNKIE",
      titleTwo: "WIRED",
      titleThree: "Mashable",
      quoteOne:
        "You focus on pulling in the work, and the technology handles the rest",
      quoteTwo:
        "Literally transports you from home to whatever you choose to run",
      quoteThree: "Breathes new life into a tired, old running routine",
    },
    Japanese: {
      titleOne: "ギアジュンキー",
      titleTwo: "有線",
      titleThree: "マッシュ可能",
      quoteOne:
        "あなたは仕事を引き込むことに集中し、テクノロジーが残りを処理します",
      quoteTwo:
        "文字通りあなたを家からあなたが実行することを選択したものに運びます",
      quoteThree: "疲れた古いランニングルーチンに新しい命を吹き込みます",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);
  return (
    <div className="media-container">
      <section className="media-section">
        <div className="row">
          <div className="content">
            <h1>{content.titleOne}</h1>
            <p className="media-review-paragraph">"{content.quoteOne}."</p>
          </div>
        </div>
        {/* Second Review */}
        <div className="row">
          <div className="content">
            <h1>{content.titleTwo}</h1>
            <p className="media-review-paragraph">"{content.quoteTwo}."</p>
          </div>
        </div>
        {/* Third Review */}
        <div className="row">
          <div className="content">
            <h1>{content.titleThree}</h1>
            <p className="media-review-paragraph">"{content.quoteThree}."</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MediaSlider;
