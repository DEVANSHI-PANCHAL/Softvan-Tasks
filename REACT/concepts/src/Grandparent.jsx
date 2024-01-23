// Grandparent.js
import React, { useState } from 'react';
import Parent from './Parent';

const Grandparent = () => {
  const [data, setData] = useState('Hello from Grandparent');

  return (
    <div>
      <h1>Grandparent</h1>
      <Parent data={data} />
    </div>
  );
};

export default Grandparent;



