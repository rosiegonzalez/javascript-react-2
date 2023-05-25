import React from 'react'
import { useState } from 'react'
// import './Timer.css'

export const Timer = () => {
// Declare state variables
    const [startTime, setStartTime] = useState(""); // Holds the start time when the button is clicked
    const [endTime, setEndTime] = useState(""); // Holds the elapsed time when the button is clicked again to stop the timer
  
    // Function called when the button is clicked
    const handleButtonClick = () => {
      if (startTime) {
        // If start time is already set, calculate the elapsed time
        const elapsedTime = ((Date.now() - startTime) / 1000); // Convert milliseconds to seconds
        setEndTime(elapsedTime); // Update the end time state with the elapsed time
        setStartTime(""); // Reset the start time state
      } else {
        // Set the start time
        setStartTime(Date.now());
        setEndTime(""); // Reset the end time state
      }
    };
  
    return (
      <div className='Timer'>
        <h1>Timer</h1>
        <br />
        <button onClick={handleButtonClick}>{startTime ? 'Stop' : 'Start'}</button>
        {endTime && <p>Elapsed Time: {endTime} seconds</p>}
      </div>
    );
}