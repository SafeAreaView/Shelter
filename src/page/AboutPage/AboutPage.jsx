import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutPageContent from "./AboutPageContent";
import "./AboutPage.css";
function AboutPage() {
  return (
    <div>
      <div className="about-page-header__wrapper">
        <Header id="header"></Header>
      </div>
      <AboutPageContent></AboutPageContent>
      <Footer></Footer>
    </div>
  );
}

export default AboutPage;
