import React from "react";
import Header from "../Header/Header";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="first-screen-container">
      <div className="first-screen__wrapper">
        <Header />
        <div className="first-screen-content row-sb">
          <div className="first-screen-content__text-block column-sb">
            <h2
              className="fist-screen__title"
              style={{ whiteSpace: "pre-wrap" }}
            >
              Not only people {/* prettier-ignore */}
              need a house
            </h2>
            <p className="fist-screen__subtitle">
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
            <button id="first-screen-btn" className="btn">
              Make a friend
            </button>
          </div>
          <img
            src="/src/assets/images/main-section-img.png"
            alt="Brown dog illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
