import React from "react";
import "./DonationSection.css";
import donationImg from "/src/assets/images/donation-section-img.png";

function DonationSection() {
  return (
    <section className="donation-section-container">
      <div className="section-padding content">
        <div className="donation-section__content row-sb">
          <img
            src={donationImg}
            className="donation-section__img"
            alt="Golden Retreiver"
          />
          <div className="donation-section__text-block column-sb">
            <h3 className="title">
              You can also <br /> make a donation
            </h3>
            <p className="subtitle">Name of the bank / Type of bank account</p>
            <button className="btn" id="credit-card-btn">
              8380 2880 8028 8791 7435
            </button>
            <p className="legal-info">
              Legal information and lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
              ac diam. Praesent ultrices maximus tortor et vulputate. Interdum
              et malesuada fames ac ante ipsum primis in faucibus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationSection;
