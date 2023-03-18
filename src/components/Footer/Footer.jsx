import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer__wrapper row-sb">
        <div className="footer__link-box column-sb">
          <h3 id="footer-title" className="title">
            For questions and suggestions
          </h3>
          <a href="mailto:email@shelter.com" className="footer__link">
            <img src="./src/assets/icons/icon-email.svg" alt="" />
            <span className="link__name">email@shelter.com</span>
          </a>
          <a href="tel:+13-674-567-75-54" className="footer__link">
            <img src="./src/assets/icons/icon-phone.svg" alt="" />
            <span className="link__name">+13 674 567 75 54</span>
          </a>
        </div>
        <div className="footer__link-box column-sb">
          <h3 id="footer-title" className="title">
            We are waiting <br /> for your visit
          </h3>
          <a href="" className="footer__link">
            <img src="./src/assets/icons/icon-marker.svg" alt="" />
            <span className="link__name">
              1 Central Street, Boston <br /> (entrance from the store)
            </span>
          </a>
          <a href="" className="footer__link">
            <img src="./src/assets/icons/icon-marker.svg" alt="" />
            <span className="link__name">18 South Park, London </span>
          </a>
        </div>{" "}
        <img
          className="footer__image"
          src="./src/assets/images/footer-img.png"
          alt=""
        />
      </div>
    </footer>
  );
}

export default Footer;
