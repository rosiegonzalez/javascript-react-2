import React from 'react'
import { useState } from 'react'

export const CarCounter = () => {
    let [fordCount, setFordCount]= useState(0);
    let [toyotaCount, setToyotaCount]= useState(0);
    let [chevyCount, setChevyCount]= useState(0);
  
    const onHandleClick = (cars) => {
        switch(cars) {
        case "Ford":
             setFordCount(++fordCount)
             break;
        case "Toyota":
            setToyotaCount(++toyotaCount)
            break;
        case "Chevy":
        setChevyCount(++chevyCount)
        break;
        default:
        break;
}  

    }
  
    return (
    <div className='Main'>
        <button onClick={() => onHandleClick("Ford")}>Ford</button>
        <button onClick={() => onHandleClick("Toyota")}>Toyota</button>
        <button onClick={() => onHandleClick("Chevy")}>Chevy</button>
        
        <br />

        Ford: {fordCount}

        <br />

        Toyota: {toyotaCount}

        <br/>

        Chevy: {chevyCount}
    </div>
  );
}
