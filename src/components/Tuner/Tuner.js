import React from "react";
import aKey from "./a-key.wav";
import { IoMdMusicalNote } from "react-icons/io";

// Styling
import "./Tuner.css";

export function Tuner() {

  const handlePlay = () => {
    let audio = new Audio(aKey);
    audio.play();
  };

  return (
    <div className="tuner-container">
      <div className="tuner-container-sound" onClick={handlePlay}>
        <IoMdMusicalNote size={120} />
      </div>
      <div className="tuner-container-options">
        <p>A</p>
      </div>
    </div>
  );
}

export default Tuner;
