import React from "react";
import aKey from "./a-key.wav";

export function Tuner() {

  const handlePlay = () => {
    let audio = new Audio(aKey);
    audio.play();
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}

export default Tuner;
