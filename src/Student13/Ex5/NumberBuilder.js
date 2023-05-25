import React from 'react'
import { useState } from 'react'

export const NumberBuilder = () => {
    let [numbers, setNumbers]= useState("") 
    let [counter, setCounter]= useState(0)
  
    const onHandleClick = () => {
        setCounter(++counter)
        setNumbers(numbers += (counter + " "))
    }
  
    const onHandleReset = () => {
        setCounter(0)
        setNumbers("")
    }
  
    return (
    <div className='Main'>
        <button onClick={() => onHandleClick()}>Add Number</button>
        <button onClick={() => onHandleReset()}>Reset</button>
        <br />

        Numbers: {numbers}
    </div>
  )
}
