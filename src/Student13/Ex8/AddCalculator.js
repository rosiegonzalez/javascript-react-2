import React from 'react'
import { useState } from 'react';

export const AddCalculator = () => {
  
    let [oneCount, setOneCount] = useState(0);
    let [twoCount, setTwoCount] = useState(0);
    let [threeCount, setThreeCount] = useState(0);
    let [total, setTotal] = useState(0);
  
    const onHandleClick = (calculator) => {
      switch (calculator) {
        case "One":
          setOneCount(+1)
          break;
        case "Two":
          setTwoCount(+2)
          break;
        case "Three":
          setThreeCount(+3)
          break;
        default:
          break;
      }
      setTotal(oneCount + twoCount + threeCount)
    };
  
    return (
      <div className="Main">
        <button onClick={() => onHandleClick("One")}>Add 1</button>
        <button onClick={() => onHandleClick("Two")}>Add 2</button>
        <button onClick={() => onHandleClick("Three")}>Add 3</button>
        <br />
        One: {oneCount}    <br />
        Two: {twoCount}<br />
        Three: {threeCount}  <br />
        TOTAL: {total} <br />
      </div>
    );
}

  
  
  
  
  
  
  
  
  
  
  
  
 