import React from "react";
import "./MediaSlider.css";

function MediaSlider(props) {
  return (
    <div className="media-container">
      <section className="media-section">
        <div className="row">
          <div className="content">
            <h1>GEAJUNKIE</h1>
            <p className="media-review-paragraph">
              "You focus on pulling in the work, and the technology handles the
              rest."
            </p>
          </div>
        </div>
        {/* Second Review */}
        <div className="row">
          <div className="content">
            <h1>GEAJUNKIE</h1>
            <p className="media-review-paragraph">
              "You focus on pulling in the work, and the technology handles the
              rest."
            </p>
          </div>
        </div>
        {/* Third Review */}
        <div className="row">
          <div className="content">
            <h1>GEAJUNKIE</h1>
            <p className="media-review-paragraph">
              "You focus on pulling in the work, and the technology handles the
              rest."
            </p>
          </div>
        </div>
        {/* Fourth Review */}
        <div className="row">
          <div className="content">
            <h1>GEAJUNKIE</h1>
            <p className="media-review-paragraph">
              "You focus on pulling in the work, and the technology handles the
              rest."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MediaSlider;
