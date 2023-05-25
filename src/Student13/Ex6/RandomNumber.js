import React from 'react'
import { useState } from 'react'

export const RandomNumber = () => {
 
    let [randomNumber, setRandomNumber] = useState(0);

    const onHandleClick = () => {
        setRandomNumber(Math.floor(Math.random() * 11));
      
    };


    return (
    <div>
        Random Number: {randomNumber} <br />
        <button onClick={() => onHandleClick()}>Generate</button>
        <br />
        
    </div>
  );
};

