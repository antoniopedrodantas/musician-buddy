import React from "react";

// Styling
import "./LandingPage.css";

// Components
import BpmCounter from "../BpmCounter/BpmCounter";
import Tuner from "../Tuner/Tuner";
import AboutPage from "../AboutPage/AboutPage";

export function LandingPage() {
  return (
    <div>
      <div id="home-page-container">
        <div className="home-page">
          <div>Welcome to Musician Buddy</div>
        </div>
      </div>
      <div id="bpm-page-container">
        <div className="bpm-page">
          <BpmCounter />
        </div>
      </div>
      <div id="tuner-page-container">
        <div className="tuner-page">
          <Tuner />
        </div>
      </div>
      <div id="about-page-container">
        <div className="about-page">
          <AboutPage />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
