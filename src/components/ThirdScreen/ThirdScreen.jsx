import React from "react";
import "./ThirdScreen.css";

function ThirdScreen() {
  return (
    <section id="a" className="third-screen-container">
      <div className="third-screen-wrapper content">
        <div className="third-screen__content column-sb">
          <h2 className="third-screen__title title">
            Our friends who <br /> are looking for a house
          </h2>
          <div className="slider"></div>
          <button className="btn">Get to know the rest</button>
        </div>
      </div>
    </section>
  );
}

export default ThirdScreen;
