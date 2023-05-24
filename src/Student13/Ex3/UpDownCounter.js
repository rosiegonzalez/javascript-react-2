import React from 'react'
import { useState } from 'react'

export const UpDownCounter = () => {
    const [count, setCount] = useState(0)
    

  return (
    <div>

        <button onClick={()=> setCount(count-1)} > Down </button>
        <button onClick={()=> setCount(count+1)} > Up </button>
        <p>Counter : <span>{count}</span></p>
  

    </div>
  );
};
