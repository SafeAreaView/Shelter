import React from "react";
import AboutSection from "../AboutSection/AboutSection";
import HelpSection from "../HelpSection/HelpSection";
import PetsSection from "../PetsSection/PetsSection";
import DonationSection from "../DonationSection/DonationSection";

function Main() {
  return (
    <main>
      <AboutSection></AboutSection>
      <PetsSection></PetsSection>
      <HelpSection></HelpSection>
      <DonationSection></DonationSection>
    </main>
  );
}

export default Main;
