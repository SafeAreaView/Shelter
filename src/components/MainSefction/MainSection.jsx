import React from "react";
import Header from "../Header/Header";
import "./MainSection.css";
const mainSectionImgPath = "/src/assets/images/main-section-img.png";

function MainSection() {
  return (
    <div className="main-section-container">
      <div className="main-section__wrapper">
        <Header />
        <div className="main-section-content row-sb">
          <div className="main-section-content__text-block column-sb">
            <h2
              className="main-section__title"
              style={{ whiteSpace: "pre-wrap" }}
            >
              Not only people {/* prettier-ignore */}
              need a house
            </h2>
            <p className="main-section__subtitle">
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
            <button id="main-section-btn" className="btn">
              Make a friend
            </button>
          </div>
          <img
            className="main-section__img"
            src={mainSectionImgPath}
            alt="Brown dog illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
