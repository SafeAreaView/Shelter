import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="container">
      <div className="about-section-wrapper content">
        <div className="about-section__content row-sb">
          <img
            src="/src/assets/images/about-section-img.png"
            alt="Dog and Cat stays ilustration"
          />
          <div className="column-sb">
            <h2 className="title">About the shelter “Cozy House”</h2>
            <p className="subtitle">
              Currently we have 121 dogs and 342 cats on our hands and
              statistics show that only 20% of them will find a family. The
              others will continue to live with us and will be waiting for a
              lucky chance to become dearly loved.
            </p>
            <p className="subtitle">
              We feed our wards with the best food and make sure that they do
              not get sick, feel comfortable (including psychologically) and
              well. We are supported by 87 volunteers and 28 employees of
              various skill levels. About 12% of the animals are taken by the
              shelter staff. Taking care of the animals, they become attached to
              the pets and would hardly ever leave them alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
