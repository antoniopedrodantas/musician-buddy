import React from "react";
import { GiMetronome } from "react-icons/gi";
import { IoMdMusicalNote } from "react-icons/io";

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
          <h1>Welcome to MusicianBuddy</h1>
          <div>If you are a musician, this is the place for you</div>
          <div className="home-page-options">
            <a className="home-page-options-item" href="#bpm-page-container">
              <div>
                <GiMetronome size={120} />
              </div>
              <div>BPM Counter</div>
            </a>
            <a className="home-page-options-item" href="#tuner-page-container">
              <div>
                <IoMdMusicalNote size={120} />
              </div>
              <div>Tuner</div>
            </a>
          </div>
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
