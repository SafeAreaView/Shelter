import React from "react";
import "./PetsSection.css";

function PetsSection() {
  return (
    <section id="a" className="pet-section-container">
      <div className="section-padding content">
        <div className="pet-section__content column-sb">
          <h2 className="title-centered title">
            Our friends who <br /> are looking for a house
          </h2>
          <div className="slider"></div>
          <button className="btn">Get to know the rest</button>
        </div>
      </div>
    </section>
  );
}

export default PetsSection;
