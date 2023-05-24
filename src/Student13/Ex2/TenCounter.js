import React from 'react'
import { useState } from 'react'

export const TenCounter = () => {
    const [count, setCount] = useState(0)
    

  return (
    <div>

        <button onClick={()=> setCount(count < 10 ? count+1 : 0 )} > Push </button>
        <p>Counter : <span>{count}</span></p>
  

    </div>
  )
}
