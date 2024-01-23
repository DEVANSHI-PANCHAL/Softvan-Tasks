import React, { useState } from 'react';

const UseState = () => {
  const [name, setName] = useState('Devanshi');
  const [obj, setObj] = useState({
    name: "devanshi",
    lastName: "panchal",
    age: "23"
  });
  const [arr, setArr] = useState([
    {
      name: "devanshi",
      email: "d@gmail.com"
    },
    {
      name: "khushboo",
      email: "k@gmail.com"
    },
    {
      name: "vaishli",
      email: "v@gmail.com"
    }
  ]);
  const clearArray = () => {
    setArr([]);
  }

  const changeName = () => {
    setName((prevName) => (prevName === 'Devanshi' ? 'debu' : 'Devanshi'));
  }

  const changeObjValues = () => {
    setObj({ ...obj, name: "khushboo" });
  }

  return (
    <div>
      <h1>Welcome {name}</h1>
      <h2>Object: {obj.name} {obj.lastName}</h2>
      <button onClick={changeObjValues}>Change obj</button>
      <button onClick={changeName}>Click me</button>

      {/* Display names from the array */}
      {arr.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
      <button onClick={clearArray}>Clear Array</button>
    </div>
  );
}

export default UseState;
