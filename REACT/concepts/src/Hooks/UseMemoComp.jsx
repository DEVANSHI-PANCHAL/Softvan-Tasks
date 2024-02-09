import React, { useState, useMemo } from 'react';

const UseMemoComp = () => {
    const [number, setNumber] = useState(0);
  
    // Define a function to calculate the square of the number
    const calculateSquare = (num) => {
      console.log("Calculating square...");
      return num * num;
    };
  
    // Memoize the result of calculateSquare using useMemo
    const square = useMemo(() => calculateSquare(number), [number]);
  
    return (
      <div>
        <h1>Example Component</h1>
        <p>Number: {number}</p>
        <p>Square: {square}</p>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      </div>
    );
  };

export default UseMemoComp
