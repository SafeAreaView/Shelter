import React from "react";
import Header from "../Header/Header";
import "./FirstScreen.css";

function FirstScreen() {
  return (
    <div className="first-screen-container">
      <div className="first-screen__wrapper">
        <Header />
        <div className="first-screen-content row">
          <div className="first-screen-content__text-block column-sb">
            <h2 className="title" style={{ whiteSpace: "pre-wrap" }}>
              Not only people {/* prettier-ignore */}
              need a house
            </h2>
            <p className="subtitle">
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
            <button id="first-screen-btn" className="btn">
              Make a friend
            </button>
          </div>
          <img src="/src/assets/images/first-screen-puppy.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;
