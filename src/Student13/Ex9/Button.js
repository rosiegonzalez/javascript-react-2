import React from 'react';
import { useState } from 'react';

export const Button = () => {
    const [button1, setButton1] = useState('Push');
    const [button2, setButton2] = useState('Pushed');

    const handleButtonClick = (Buttons) => {
        if (Buttons === 1) {
            setButton1('Push'); 
        }
        else if (Buttons === 2) {
            setButton2('Pushed');
        }
    }
    const handleReset = () => {
        setButton1('Pushed');
        setButton2('Push');
        
};
return (
<div>
<p><button onClick={() => handleButtonClick(1)}>{button1}</button></p>
<p><button onClick={() => handleButtonClick(2)}>{button2}</button></p>
<p><button onClick={handleReset}>Reset</button></p>
</div>
)
}