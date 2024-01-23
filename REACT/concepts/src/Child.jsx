
// Child.js
import React from 'react';

const Child = ({ data }) => {
  return (
    <div>
      <h3>Child</h3>
      <p>Data from Grandparent: {data}</p>
    </div>
  );
};

export default Child;