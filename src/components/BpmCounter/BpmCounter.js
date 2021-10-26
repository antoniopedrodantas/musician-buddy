import React, { useState } from "react";
import moment from "moment";
import { GrPowerReset } from "react-icons/gr";
import { FaRegHandPointUp } from "react-icons/fa";

// Styling
import "./BpmCounter.css";

export function BpmCounter() {
  // bpm variable
  const [finalBpm, setFinalBpm] = useState(0);

  // variables for the counter and time
  const [BpmCounter, setBpmCounter] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(moment());

  // variable for the metronome
  // const [isPlaying, setPlaying] = useState(false);

  // clicking mechanism
  const handleBpmClick = () => {
    // bpm counter always increases
    setBpmCounter(BpmCounter + 1);

    // once the user clicks the first time, the time starts counting
    if (BpmCounter === 1) {
      setStartTime(moment().format("x"));
    }

    // sets current time and calculates the difference from the start time
    setCurrentTime(moment().format("x"));
    const timeDiff = currentTime - startTime;

    // ignores the 0 bug
    if (parseInt(timeDiff) !== 0) {
      // calculates bpm for this tap
      // had to put BpmCounter - 2 because of weird bug on moment library
      // on the first 2 taps the start time isn't initialized
      // the correct formula would be => BpmCounter / ((timeDiff / 1000) / 60)
      setFinalBpm((BpmCounter - 2) / (timeDiff / 1000 / 60));
    }
  };

  // handles reset button
  // takes bpm result to undefined
  const handleResetBpm = () => {
    setBpmCounter(0);
    setStartTime(0);
    setCurrentTime(moment());
    setFinalBpm(0);
  };

  // handles rendering
  // if finalbpm is greater than 0 returns bpm
  // otherwise just does a little countdown
  const renderBpmResult = () => {
    if (finalBpm > 0) {
      return (
        <>
          <div className="bpm-container-result">
            <p className="bpm-result">{Math.round(finalBpm)}</p>
            <p>BPM</p>
          </div>
        </>
      );
    } 
    else if (BpmCounter === 1 && finalBpm <= 0) {
      return (
        <>
          <div className="bpm-container-result">
            <p className="bpm-result">3</p>
          </div>
        </>
      );
    }
    else if (BpmCounter === 2 && finalBpm <= 0) {
      return (
        <>
          <div className="bpm-container-result">
            <p className="bpm-result">2</p>
          </div>
        </>
      );
    }
    else if (BpmCounter === 3 && finalBpm <= 0) {
      return (
        <>
          <div className="bpm-container-result">
            <p className="bpm-result">1</p>
          </div>
        </>
      );
    }
    else {
      return (
        <>
          <div className="bpm-container-result">
            <p className="bpm-result-hidden">Start tappin'!</p>
          </div>
        </>
      );
    }
  };

  return (
    <div className="bpm-container">
      {renderBpmResult()}
      <div className="bpm-container-options">
        <div className="bpm-container-options-item" onClick={handleBpmClick}>
          <div>
            <FaRegHandPointUp size={32} />
          </div>
        </div>
        <div className="bpm-container-options-item" onClick={handleResetBpm}>
          <div>
            <GrPowerReset size={32} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BpmCounter;
