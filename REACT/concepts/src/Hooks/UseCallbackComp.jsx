import React, { useState, useCallback } from 'react';

const UseCallbackComp = () => {
  const [count, setCount] = useState(0);

  // Define a callback function that increments the count state
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this callback doesn't depend on any external variables

  return (
    <div>
      <h1>Example Component</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default UseCallbackComp;
