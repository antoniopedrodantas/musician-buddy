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
          <h1 className="text-center-aligned">Welcome to MusicianBuddy</h1>
          <h4 className="text-center-aligned">If you are a musician, this is the place for you</h4>
          <div className="text-center-aligned">Try out the BPM Counter and our Tuner!</div>
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
