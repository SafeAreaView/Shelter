import React from "react";
import "./HelpSection.css";

function HelpSection() {
  return (
    <section id="help" className="help-section-container">
      <div className="section-padding content">
        <div className="help-section__content column-sb">
          <h2 className="title-centered title">
            How you can help <br /> our shelter
          </h2>
          <div className="help-section__list">
            <div className="list__card">
              <img
                src="/src/assets/icons/icon-pet-food.svg"
                alt=""
                className="card__icon"
              />
              <h3 className="card__name">Pet food</h3>
            </div>
            <div className="list__card">
              <img
                src="/src/assets/icons/icon-pet-food.svg"
                alt=""
                className="card__icon"
              />
              <h3 className="card__name">Pet food</h3>
            </div>
            <div className="list__card">
              <img
                src="/src/assets/icons/icon-pet-food.svg"
                alt=""
                className="card__icon"
              />
              <h3 className="card__name">Pet food</h3>
            </div>
            <div className="list__card">
              <img
                src="/src/assets/icons/icon-pet-food.svg"
                alt=""
                className="card__icon"
              />
              <h3 className="card__name">Pet food</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
