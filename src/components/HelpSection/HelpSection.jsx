import React from "react";
import "./HelpSection.css";
import petFoodIcon from "/src/assets/icons/icon-pet-food.svg";
import transportationIcon from "/src/assets/icons/icon-transportation.svg";
import toysIcon from "/src/assets/icons/icon-toys.svg";
import bowlsIcon from "/src/assets/icons/icon-bowls-and-cups.svg";
import shampoosIcon from "/src/assets/icons/icon-shampoos.svg";
import vitaminsIcon from "/src/assets/icons/icon-vitamins.svg";
import medecinesIcon from "/src/assets/icons/icon-medicines.svg";
import collarsIcon from "/src/assets/icons/icon-collars-leashes.svg";
import sleepingIcon from "/src/assets/icons/icon-sleeping-area.svg";

function HelpSection() {
  return (
    <section id="help" className="help-section-container">
      <div className="section-padding content">
        <div className="help-section__content column-sb">
          <h2 className="title-centered title">
            How you can help <br /> our shelter
          </h2>
          <div className="help-section__list column-sb">
            <div className="list__row--first row-sb">
              <div className="list__card">
                <img
                  src={petFoodIcon}
                  alt="Pet food icon"
                  className="card__icon"
                />
                <h3 className="card__name">Pet food</h3>
              </div>
              <div className="list__card">
                <img
                  src={transportationIcon}
                  alt="Transportation icon"
                  className="card__icon"
                />
                <h3 className="card__name">Transportation</h3>
              </div>
              <div className="list__card">
                <img src={toysIcon} alt="Toys icon" className="card__icon" />
                <h3 className="card__name">Toys</h3>
              </div>
              <div className="list__card">
                <img
                  src={bowlsIcon}
                  alt="Bowls and cups icon"
                  className="card__icon"
                />
                <h3 className="card__name">Bowls and cups</h3>
              </div>
              <div className="list__card">
                <img
                  src={shampoosIcon}
                  alt="Shampoos icon"
                  className="card__icon"
                />
                <h3 className="card__name">Shampoos</h3>
              </div>
            </div>
            <div className="list__row--second row-sb">
              <div className="list__card">
                <img
                  src={vitaminsIcon}
                  alt="Vitamins icon"
                  className="card__icon"
                />
                <h3 className="card__name">Vitamins</h3>
              </div>
              <div className="list__card">
                <img
                  src={medecinesIcon}
                  alt="Medicines icon"
                  className="card__icon"
                />
                <h3 className="card__name">Medicines</h3>
              </div>
              <div className="list__card">
                <img
                  src={collarsIcon}
                  alt="Collars / leashes icon"
                  className="card__icon"
                />
                <h3 className="card__name">Collars / leashes</h3>
              </div>
              <div className="list__card">
                <img src={sleepingIcon} alt="" className="card__icon" />
                <h3 className="card__name">Sleeping areas</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
