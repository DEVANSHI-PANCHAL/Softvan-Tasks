import React from "react";

const Optimization = () => {
  return (
    <div className="optimization-container">
      <div className="section">
        <h1>What is Memoization?</h1>
        <p>
          Memoization is essentially just caching. Imagine a complex function
          that is slow to run which takes a as an argument. In order to speed up
          this function, you can cache the results of running the function so
          that when the function is run with the same inputs you can use the
          cached value instead of recomputing the value. This would look
          something like this.
        </p>
      </div>
      <div className="section">
        <h2>useMemo</h2>
        <p>
          The most basic form of memoization in React is the useMemo hook. The
          syntax for this hook is actually the exact same as useEffect since
          they both work in a similar way. The first argument of useMemo is a
          function that does the complex calculation you want to memoize, and
          the second argument is an array of all dependencies for that
          memoization.
        </p>
      </div>
      <div className="section">
        <h2>useCallback</h2>
        <p>
          useCallback works nearly identically to useMemo since it will cache a
          result based on an array of dependencies, but useCallback is used
          specifically for caching functions instead of caching values.
        </p>
      </div>
      <div className="section">
        <h2> React.memo</h2>
        <p>
          The final type of memoization in React is with React.memo. The
          React.memo function behaves very similarly to React.PureComponent in
          that a component wrapped in React.memo will not re-render unless the
          props change.
        </p>
      </div>
    </div>
  );
};

export default Optimization;
