import React from "react";
import "./Footer.css";
import emailIcon from "/src/assets/icons/icon-email.svg";
import phonelIcon from "/src/assets/icons/icon-phone.svg";
import markerIcon from "/src/assets/icons/icon-marker.svg";
import footerIcon from "/src/assets/images/footer-img.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer__wrapper row-sb">
        <div className="footer__link-box column-sb">
          <h3 id="footer-title" className="title">
            For questions and suggestions
          </h3>
          <a href="mailto:email@shelter.com" className="footer__link">
            <img className="link__img" src={emailIcon} alt="Email icon" />
            <span className="link__name">email@shelter.com</span>
          </a>
          <a href="tel:+13-674-567-75-54" className="footer__link">
            <img className="link__img" src={phonelIcon} alt="Telephone icon" />
            <span className="link__name">+13 674 567 75 54</span>
          </a>
        </div>
        <div className="footer__link-box column-sb">
          <h3 id="footer-title" className="title">
            We are waiting <br /> for your visit
          </h3>
          <a href="" className="footer__link">
            <img className="link__img" src={markerIcon} alt="Marker icon" />
            <span className="link__name">
              1 Central Street, Boston <br /> (entrance from the store)
            </span>
          </a>
          <a href="" className="footer__link">
            <img className="link__img" src={markerIcon} alt="Marker icon" />
            <span className="link__name">18 South Park, London </span>
          </a>
        </div>{" "}
        <img
          className="footer__image"
          src={footerIcon}
          alt="Gold Retreiver photo"
        />
      </div>
    </footer>
  );
}

export default Footer;
