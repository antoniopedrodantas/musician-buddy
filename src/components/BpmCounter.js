import React, {useState} from "react";
import moment from "moment";

export function BpmCounter() {

    // variables for the counter and time
    const [BpmCounter, setBpmCounter] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(moment());

    // clicking mechanism
    const handleBpmClick = () => {

        // bpm counter always increases
        setBpmCounter(BpmCounter + 1);

        // once the user clicks the first time, the time starts counting
        if (BpmCounter === 1){
            setStartTime(moment().format("x"));
        }

        // sets current time and calculates the difference from the start time
        setCurrentTime(moment().format("x"));
        const timeDiff = currentTime - startTime;

        // ignores the 0 bug
        if(parseInt(timeDiff) !== 0) {

            // calculates bpm for this tap
            // had to put BpmCounter - 2 because of weird bug on moment library
            // on the first 2 taps the start time isn't initialized
            // the correct formula would be => BpmCounter / ((timeDiff / 1000) / 60)  
            const bpm = (BpmCounter - 2) / ((timeDiff / 1000) / 60);

            // prints only valid bpm times
            if(bpm >= 0) {
                console.log(Math.round(bpm));
            }

        }

        // TODO: restarts if idle for 2 seconds
        
    }

    return (
        <div>
          <button onClick={handleBpmClick}>
              Click me
          </button>
        </div>
      );
}

export default BpmCounter;