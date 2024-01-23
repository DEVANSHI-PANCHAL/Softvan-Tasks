// Parent.js
import React from 'react';
import Child from './Child';

const Parent = ({ data }) => {
  return (
    <div>
      <h2>Parent</h2>
      <Child data={data} />
    </div>
  );
};

export default Parent;