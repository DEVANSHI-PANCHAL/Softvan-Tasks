import React, { useState } from "react";

const BasicForm = () => {
  const [inputValues, setInputValues] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const allData = { email: email, password: password };
    setInputValues([...inputValues, allData]);
    console.log(inputValues);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button type="submit">Login</button>
      </form>

      <div>
        {inputValues.map((v) => {
          return (
            <div>
              <p>Email:{v.email}</p>
              <p>Password:{v.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BasicForm;
