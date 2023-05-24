import React from 'react'
import { useState } from 'react'

export const MinMaxCounter = () => {
    const [count, setCount] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    
    const setter = (num) => {

      let sum = count+num
      setCount(sum);

      if (sum > max) {
        setMax(sum);
      }
        if (sum < min) {
          setMin(sum);
        }
      
    };

  return (
    <div>

        <button onClick={()=> setter(-1)} > Down </button>
        <p><span>{count}</span></p>
        <button onClick={()=> setter(1)} > Up </button>
        <p>Min : <span>{min}</span></p>
        <p>Max : <span>{max}</span></p>
  

    </div>
  );
};

