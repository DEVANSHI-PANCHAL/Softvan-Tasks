import { useState } from 'react';

// Define a custom hook named useCounter
const useCounter = (initialValue = 0, step = 1) => {
  // Define state for the counter value
  const [count, setCount] = useState(initialValue);

  // Define functions to increment and decrement the counter
  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  // Return the state value and the functions to manipulate it
  return { count, increment, decrement };
};

// Usage of the custom hook
const CounterComponent = () => {
  // Call the useCounter hook to get the counter state and functions
  const { count, increment, decrement } = useCounter(0, 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
